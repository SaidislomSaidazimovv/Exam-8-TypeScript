import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../services/makeupApi";
import { addToCart } from "../../features/cartSlice";
import { addToLikes } from "../../features/likeSlice";
import { RootState } from "../../app/index";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";

interface ProductCardProps {
  product?: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const currency = useSelector((state: RootState) => state.currency.selected);

  const likes = useSelector((state: RootState) => state.likes.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isLike = likes.some((item) => item.id === product?.id);
  const isInCart = cartItems.some((item) => item.id === product?.id);

  if (!product) return null;

  const handleAddToCart = () => {
    if (isInCart) {
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleToggleFavorite = () => {
    if (isLike) {
    } else {
      dispatch(addToLikes(product));
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const Price = (price: string) => {
    const numbericPrice = parseFloat(price);
    if (isNaN(numbericPrice)) return "";

    if (currency === "UZS") {
        return (numbericPrice * 12600).toLocaleString() + " UZS";
    }
    return "$" + numbericPrice.toFixed(2);
};

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 transform mt-3">
      <Link to={`/product/${product.id}`} className="block relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white animate-pulse flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded-md mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded-md mb-2"></div>
            <div className="w-1/3 h-4 bg-gray-300 rounded-md mb-4"></div>
            <div className="flex w-full justify-between">
              <div className="w-1/3 h-10 bg-gray-300 rounded-md"></div>
              <div className="w-1/3 h-10 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        )}
        <img
          src={product.image_link}
          alt={product.name}
          className={`w-full h-48 object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={handleImageLoad}
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg line-clamp-1 font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-2">{product.brand}</p>
        <p className="text-blue-600 font-bold mb-2">{Price(product.price)}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            className={`font-bold py-2 px-4 rounded transition-colors duration-200 transform hover:scale-105 ${
              isInCart
                ? "bg-blue-700 hover:bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {isInCart ? <BsCartCheckFill /> : <IoCartOutline />}
          </button>
          <button
            onClick={handleToggleFavorite}
            className={`font-bold py-2 px-4 rounded transition-colors duration-200 transform hover:scale-105 ${
              isLike
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {isLike ? <MdFavorite /> : <GrFavorite />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
