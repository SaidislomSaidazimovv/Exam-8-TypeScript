import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/makeupApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { addToLikes, removeFromLikes } from "../../features/likeSlice";
import { RootState } from "../../app/index";

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();
  // const currentCurrency = useSelector(
  //   (state: RootState) => state.currency.currentCurrency
  // );
  // const exchangeRates = useSelector(
  //   (state: RootState) => state.currency.exchangeRates
  // );
  const likes = useSelector((state: RootState) => state.likes.items);

  const isLike = product ? likes.some((item) => item.id === product.id) : false;

  // const convertPrice = (price: string) => {
  //   const numericPrice = parseFloat(price);
  //   return !isNaN(numericPrice)
  //     ? (numericPrice * exchangeRates[currentCurrency]).toFixed(2)
  //     : price;
  // };

  const handleAddToCart = () => product && dispatch(addToCart(product));

  const handleToggleFavorite = () => {
    if (product) {
      isLike
        ? dispatch(removeFromLikes(product.id))
        : dispatch(addToLikes(product));
    }
  };

  if (isLoading) return <div className="animate-pulse">Loading...</div>;
  if (error) return <div>Error occurred</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image_link}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
          <p className="text-2xl text-blue-600 font-bold mb-4">
            {/* {currentCurrency} {convertPrice(product.price)} */}
          </p>

          <div className="flex space-x-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Add to Cart
            </button>
            <button
              onClick={handleToggleFavorite}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                isLike
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
            >
              {isLike ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      </div>

      {product.product_colors.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Available Colors</h2>
          <div className="flex flex-wrap gap-2">
            {product.product_colors.map((color) => (
              <div
                key={color.hex_value}
                className="w-8 h-8 rounded-full border border-gray-300"
                style={{ backgroundColor: color.hex_value }}
                title={color.colour_name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
