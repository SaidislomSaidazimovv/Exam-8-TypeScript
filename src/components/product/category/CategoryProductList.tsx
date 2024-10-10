import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import categoryImgList1 from "../../../assets/categoryimglist1.jpg";
import categoryImgList2 from "../../../assets/categoryimglist2.jpg";
import categoryImgList3 from "../../../assets/categoryimglist3.jpg";
import categoryImgList4 from "../../../assets/categoryimglist4.jpg";
import categoryImgList5 from "../../../assets/categoryimglist5.jpg";
import categoryImgList6 from "../../../assets/categoryimglist6.jpg";
import categoryImgList7 from "../../../assets/categoryimglist7.jpg";
import categoryImgList8 from "../../../assets/categoryimglist8.jpg";
import carouselvideo1 from "../../../assets/video/carouselvideo1.mp4";
import carouselvideo2 from "../../../assets/video/carouselvideo2.mp4";
import carouselvideo3 from "../../../assets/video/carouselvideo3.mp4";
import carouselvideo4 from "../../../assets/video/carouselvideo4.webm";
import carouselvideo5 from "../../../assets/video/carouselvideo5.webm";
import carouselvideo6 from "../../../assets/video/carouselvideo6.mp4";
import carouselvideo7 from "../../../assets/video/carouselvideo7.mp4";
import carouselvideo8 from "../../../assets/video/carouselvideo8.mp4";

const categories = [
  { name: "Rexaline", image: categoryImgList4, video: carouselvideo1 },
  { name: "Lalique", image: categoryImgList5, video: carouselvideo2 },
  { name: "Filorga", image: categoryImgList6, video: carouselvideo3 },
  { name: "Lovely", image: categoryImgList2, video: carouselvideo4 },
  {
    name: "ARI ANWA Skin",
    image: categoryImgList3,
    video: carouselvideo6,
  },
  { name: "Vipera", image: categoryImgList7, video: carouselvideo5 },
  { name: "Bentley", image: categoryImgList1, video: carouselvideo7 },
  {
    name: "Faconnable",
    image: categoryImgList8,
    video: carouselvideo8,
  },
];

const CategoryCarousel: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleClose = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="relative mb-8">
      <div className="flex items-center justify-center">
        <div className="flex overflow-x-auto space-x-4 py-4 px-4 scrollbar-hide gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm mt-2">{category.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-lg w-full relative"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-3 bg-red-600 text-white rounded-full px-2 transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                <span className="font-bold text-lg">X</span>
              </button>

              <h2 className="text-2xl font-bold mb-4 -mt-3">
                {selectedCategory}
              </h2>
              <video
                autoPlay
                muted
                className="w-full rounded-lg shadow-lg"
                onEnded={() => handleClose()}
                controls
              >
                <source
                  src={
                    categories.find((c) => c.name === selectedCategory)?.video
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryCarousel;
