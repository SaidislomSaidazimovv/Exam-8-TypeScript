import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/index";
import { GrFavorite } from "react-icons/gr";
import useCurrency from "../../hooks/useCurrency";
import SearchModal from "../search/Search";
import { setCurrency } from "../../features/currencySlice";
import { TfiSearch } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import headerLogo from "../../assets/headerlogo.svg";
import "./Header.css";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading } = useCurrency();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items.length
  );
  const likesCount = useSelector(
    (state: RootState) => state.likes.items.length
  );
  const currency = useSelector((state: RootState) => state.currency.selected);

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <header className="bg-white top-0 z-50 shadow-sm container mx-auto">
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span className="text-gray-600">Бесплатная доставка!</span>
          <div className="flex space-x-4 text-gray-600">
            <Link to="/promo" className="text-red-500">
              Акции
            </Link>
            <Link to="/shipping" className="hover:text-blue-800">
              Доставка и Оплата
            </Link>
            <Link to="/about" className="hover:text-blue-800">
              О магазине
            </Link>
          </div>
          <Link to="/beauty-club" className="hover:text-blue-800">
            <span className="mr-1">★</span> Beauty Club
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <button
          onClick={openSearchModal}
          className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
        >
          <TfiSearch className="w-6 h-6" />
        </button>

        <Link to="/" className="text-3xl font-bold ml-60 text-black">
          <img className="header_logo" src={headerLogo} alt="headerlogo" />
        </Link>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => dispatch(setCurrency(e.target.value))}
              className="bg-gray-100 border border-gray-300 rounded-md py-1 pl-2 pr-8 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              disabled={isLoading}
            >
              <option value="USD">USD</option>
              <option value="UZS">UZS</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
            {isLoading && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-50 rounded-md">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>
          <Link
            to="/profile"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            <CiUser className="w-8 h-9" />
          </Link>
          <Link
            to="/like"
            className="relative flex items-center text-gray-700 hover:text-red-600 transition-colors duration-300"
          >
            <GrFavorite className="w-7 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
              {likesCount}
            </span>
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            <BsHandbag className="w-7 h-6 mr-2" />
            <span className="absolute -top-2 -right-1 bg-blue-600 text-white rounded-full px-2 py-1 text-xs">
              {cartItemsCount}
            </span>
          </Link>
        </div>
      </div>

      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />

      <div className="flex gap-32 justify-center">
        <Link to="/category/blush">
          <h2 className="hover:text-purple-800 text-lg font-bold transition duration-300">
            Blush
          </h2>
        </Link>
        <Link to="/category/bronzer">
          <h2 className="hover:text-purple-800 text-lg font-bold transition duration-300">
            Bronzer
          </h2>
        </Link>
        <Link to="/category/eyeliner">
          <h2 className="hover:text-purple-800 text-lg font-bold transition duration-300">
            Eyeliner
          </h2>
        </Link>
        <Link to="/category/eyeshadow">
          <h2 className="hover:text-purple-800 ml-20 text-lg font-bold transition duration-300">
            Eyeshadow
          </h2>
        </Link>
        <Link to="/category/foundation">
          <h2 className="hover:text-purple-800 text-lg font-bold transition duration-300">
            Foundation
          </h2>
        </Link>
        <Link to="/category/lipstick">
          <h2 className="hover:text-purple-800 text-lg font-bold transition duration-300">
            Lipstick
          </h2>
        </Link>
        <Link to="/category/mascara">
          <h2 className="hover:text-purple-800 text-lg font-bold transition duration-300">
            Mascara
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
