import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../services/makeupApi";
import { addToCart } from "../../features/cartSlice";
import { addToLikes } from "../../features/likeSlice";
import { RootState } from "../../app/index";
import { Heart, ShoppingCart, ChevronDown } from "lucide-react";

interface ProductCardProps {
  product?: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const currency = useSelector((state: RootState) => state.currency.selected);

  const likes = useSelector((state: RootState) => state.likes.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isLike = likes.some((item) => item.id === product?.id);
  const isInCart = cartItems.some((item) => item.id === product?.id);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!isInCart && selectedOption) {
      dispatch(addToCart({ ...product, selectedOption, quantity: 1 }));
    }
  };

  const handleToggleFavorite = () => {
    if (!isLike) {
      dispatch(addToLikes(product));
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const Price = (price: string) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) return "";

    if (currency === "UZS") {
      return (numericPrice * 12600).toLocaleString() + " UZS";
    }
    return "$" + numericPrice.toFixed(2);
  };

  const options = ["50 ml", "100 ml"];

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white animate-pulse flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded-md mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded-md mb-2"></div>
            <div className="w-1/3 h-4 bg-gray-300 rounded-md mb-4"></div>
          </div>
        )}

        <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 text-sm font-semibold">
          DEAL
        </div>

        <img
          src={product.image_link}
          alt={product.name}
          className={`w-full h-48 object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={handleImageLoad}
        />
      </Link>

      {isHovered && (
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isLike ? "bg-red-500 text-white" : "bg-white text-gray-700"
          } shadow-md transition-all duration-200 transform hover:scale-110`}
        >
          <Heart size={20} />
        </button>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 fill-current text-yellow-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="text-sm ml-2 text-gray-600">(225 отзывов)</span>
        </div>
        <p className="text-xl font-bold text-blue-600 mb-4">
          {Price(product.price)}
        </p>

        <div className="relative mb-4">
          <button
            className="w-full px-4 py-2 text-left bg-gray-100 rounded-md flex justify-between items-center"
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            {selectedOption || "Select an ml"}
            <ChevronDown
              size={20}
              className={`transform transition-transform ${
                isSelectOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isSelectOpen && (
            <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
              {options.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedOption(option);
                    setIsSelectOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={isInCart || !selectedOption}
          className={`w-full py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2 ${
            isInCart || !selectedOption
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          <ShoppingCart size={20} />
          <span>
            {isInCart
              ? "In Cart"
              : `Add to Cart${selectedOption ? ` - ${selectedOption}` : ""}`}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
