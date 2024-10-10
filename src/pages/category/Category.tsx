import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../services/makeupApi";
import ProductCard from "../../components/product/ProductCard";
import ImageCarousel from "./carousel/ImageCarousel";
import ClipLoader from "react-spinners/ClipLoader";
import { MdExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import Sidebar from "./leftSideBar/LeftSideBar";

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { data: products, isLoading } = useGetProductsQuery();

  const filteredProducts = products?.filter(
    (product) => product.product_type === category
  );

  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const loadLess = () => {
    setVisibleCount((prev) => Math.max(prev - 4, 6));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#4A90E2" loading={isLoading} size={50} />
      </div>
    );
  }

  return (
    <div className="flex container mx-auto p-4">
      <Sidebar />
      <div className="flex-1 ml-4">
        <ImageCarousel />
        <h1 className="text-2xl font-bold mb-4">{category}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts?.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="cursor-pointer transition-transform transform hover:scale-105"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {filteredProducts && filteredProducts.length > visibleCount && (
            <button
              onClick={loadMore}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition mr-2"
            >
              <MdExpandMore />
            </button>
          )}
          {filteredProducts && visibleCount > 6 && (
            <button
              onClick={loadLess}
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition"
            >
              <MdOutlineExpandLess />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
