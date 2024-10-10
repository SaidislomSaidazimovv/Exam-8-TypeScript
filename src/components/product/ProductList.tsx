import React, { useState } from "react";
import { useGetProductsQuery } from "../../services/makeupApi";
import ProductCard from "./ProductCard";
import ImageCarousel from "../carousel/Carousel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList: React.FC = () => {
  const [category, setCategory] = useState<string | null>(null);
  const { data: products, isLoading, error } = useGetProductsQuery();

  const filteredProducts = category
    ? products?.filter((product) => product.product_type === category)
    : products;

  const categories = Array.from(new Set(products?.map((p) => p.product_type)));

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <ImageCarousel />

      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-300 rounded-md"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-10 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center py-4">
          <p>Error occurred while fetching products.</p>
        </div>
      )}

      <div className="mb-6">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            className={`p-2 border rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 hover:text-white ${
              category === null
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setCategory(null)}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`p-2 border rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 hover:text-white ${
                category === cat
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts?.slice(50, 65).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
