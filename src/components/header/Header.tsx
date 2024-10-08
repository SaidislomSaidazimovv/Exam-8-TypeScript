import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/index";
import { GrFavorite, GrUser } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { setCurrency } from "../../features/currencySlice";
import { AiOutlineSearch } from "react-icons/ai";
import SearchModal from "../search/Search";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items.length
  );
  const likesCount = useSelector(
    (state: RootState) => state.likes.items.length
  );
  const currentCurrency = useSelector(
    (state: RootState) => state.currency.currentCurrency
  );

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setCurrency(e.target.value));
      setIsLoading(false);
    }, 500);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
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
            <span className="mr-1">★</span>
            Beauty Club
          </Link>
      </div>
    </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={openSearchModal}
          className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
        >
          <AiOutlineSearch className="w-6 h-6" />
        </button>

        <Link to="/" className="text-3xl font-bold ml-60 text-black">
          MAKEUP
        </Link>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <select
              value={currentCurrency}
              onChange={handleCurrencyChange}
              className="bg-gray-100 border border-gray-300 rounded-md py-1 pl-2 pr-8 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              disabled={isLoading}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
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
            <GrUser className="w-7 h-6" />
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
            <MdOutlineShoppingCart className="w-7 h-6 mr-2" />
            <span className="absolute -top-2 -right-1 bg-blue-600 text-white rounded-full px-2 py-1 text-xs">
              {cartItemsCount}
            </span>
          </Link>
        </div>
      </div>

      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
    </header>
  );
};

export default Header;
