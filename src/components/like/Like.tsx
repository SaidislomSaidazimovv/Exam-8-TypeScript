import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/index";
import { removeFromLikes } from "../../features/likeSlice";
import { Link } from "react-router-dom";

const FavoritesPage: React.FC = () => {
  const likes = useSelector((state: RootState) => state.likes.items);
  const dispatch = useDispatch();

  const handleRemoveFromLikes = (productId: number) => {
    dispatch(removeFromLikes(productId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      {likes.length === 0 ? (
        <p className="text-gray-600">You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likes.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.brand}</p>
                <p className="text-blue-600 font-bold mb-2">${product.price}</p>
                <button
                  onClick={() => handleRemoveFromLikes(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
