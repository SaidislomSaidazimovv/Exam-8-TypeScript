import React from "react";

const LeftSideBar: React.FC = () => {
  const categories = [
    { id: 1, name: "Lipstick" },
    { id: 2, name: "Foundation" },
    { id: 3, name: "Eyeshadow" },
    { id: 4, name: "Blush" },
    { id: 5, name: "Mascara" },
  ];

  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <form>
        {categories.map((category) => (
          <div key={category.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category.name}
              className="mr-2"
              value={category.name}
            />
            <label htmlFor={category.name}>{category.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default LeftSideBar;
