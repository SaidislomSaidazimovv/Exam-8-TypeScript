import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Search.css";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  currency: string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number | null;
  category: string;
  product_type: string;
  tag_list: string[];
  created_at: string;
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: { hex_value: string; colour_name: string }[];
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productType, setProductType] = useState("lipstick");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    } else {
      setResults([]);
    }
  }, [searchTerm, productType]);

  const handleSearch = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${encodeURIComponent(
          searchTerm
        )}&product_type=${encodeURIComponent(productType)}`
      );
      setResults(response.data);
    } catch (err) {
      setError("An error occurred while searching. Please try again.");
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleResultClick = (product: Product) => {
    navigate(`/product/${product.id}`);
    onClose();
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 ${
        isOpen ? "modal-enter" : "modal-exit"
      }`}
    >
      <div
        ref={modalRef}
        className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex items-center border-b">
          <AiOutlineSearch className="text-gray-500 mr-2" size={24} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for makeup products..."
            className="flex-grow outline-none text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <select
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="ml-4 p-2 border border-gray-300 rounded"
          >
            <option value="lipstick">Lipstick</option>
            <option value="foundation">Foundation</option>
            <option value="eyeliner">Eyeliner</option>
          </select>
          <button
            onClick={onClose}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        {isLoading ? (
          <div className="p-4 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        ) : error ? (
          <div className="p-4 text-center text-red-500">{error}</div>
        ) : (
          <ul className="max-h-64 overflow-y-auto">
            {results.map((product) => (
              <li
                key={product.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleResultClick(product)}
              >
                <div className="font-semibold">{product.name}</div>
                <div className="text-sm text-gray-600">{product.brand}</div>
                <div className="text-sm text-gray-800">${product.price}</div>
              </li>
            ))}
            {results.length === 0 && searchTerm && !isLoading && (
              <li className="p-2 text-center text-gray-500">
                No results found
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
