import React from "react";

const SideBar: React.FC = () => {
  const categories = [
    { id: 1, name: "Lipstick" },
    { id: 2, name: "Foundation" },
    { id: 3, name: "Eyeshadow" },
    { id: 4, name: "Blush" },
    { id: 5, name: "Mascara" },
  ];

  return (
    <div className="w-1/4 bg-gradient-to-b from-pink-100 to-purple-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-xl font-semibold mb-6 text-gray-700 border-b pb-2">
        Categories
      </h2>
      <form>
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center mb-4 cursor-pointer group"
          >
            <input
              type="checkbox"
              id={category.name}
              className="mr-3 form-checkbox h-5 w-5 text-purple-500 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              value={category.name}
            />
            <label
              htmlFor={category.name}
              className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300"
            >
              {category.name}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SideBar;
