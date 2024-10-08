// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between items-center">
//           <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
//             <h2 className="text-2xl font-bold">MakeupStore</h2>
//             <p className="mt-2">Your one-stop shop for all things beauty</p>
//           </div>
//           <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
//             <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
//             <ul>
//               <li><a href="/" className="hover:text-blue-400">Home</a></li>
//               <li><a href="/search" className="hover:text-blue-400">Search</a></li>
//               <li><a href="/cart" className="hover:text-blue-400">Cart</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 text-center md:text-right">
//             <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
//             <div className="flex justify-center md:justify-end space-x-4">
//               <a href="#" className="text-2xl hover:text-blue-400">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="#" className="text-2xl hover:text-blue-400">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="text-2xl hover:text-blue-400">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 text-center">
//           <p>&copy; 2024 MakeupStore. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 py-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">О нас</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gray-900">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-gray-900">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gray-900">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/app" className="hover:text-gray-900">
                  Приложение
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">О доставке</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/delivery" className="hover:text-gray-900">
                  О доставке
                </Link>
              </li>
              <li>
                <Link to="/payment" className="hover:text-gray-900">
                  Способы оплаты
                </Link>
              </li>
              <li>
                <Link to="/authenticity" className="hover:text-gray-900">
                  Оригинальность продукции
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-gray-900">
                  Обмен и возврат
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Статьи</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/articles" className="hover:text-gray-900">
                  Статьи
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-gray-900">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/beauty-club" className="hover:text-gray-900">
                  Beauty Club
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">+998 712 050 578</h3>
            <p>
              Вы можете{" "}
              <Link
                to="/contact"
                className="text-purple-600 hover:text-purple-800"
              >
                написать нам письмо
              </Link>{" "}
              позвонить нам по телефонам
            </p>
            <p className="mt-2">Ежедневно с 7:55 до 20:05</p>
            <Link
              to="/callback"
              className="text-purple-600 hover:text-purple-800 block mt-2"
            >
              Обратный звонок
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <p className="font-semibold">MAKEUP GLOBAL</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Austria",
                  "Belgium",
                  "Bulgaria",
                  "Croatia",
                  "Cyprus",
                  "Czech Republic",
                  "Denmark",
                  "Estonia",
                  "France",
                  "Germany",
                  "Greece",
                  "Hungary",
                  "Ireland",
                  "Israel",
                  "Italy",
                ].map((country) => (
                  <span
                    key={country}
                    className="footer-text-flag-span"
                    title={country}
                  >
                    <img
                      loading="lazy"
                      className="flag"
                      src={`https://i.makeupstore.uz/${country.toLowerCase()}.svg`}
                      alt={country}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-purple-600 font-semibold">
              MAKEUP™. BEAUTY WITHOUT LIMITS
            </p>
            <p className="mt-2">&copy; MAKEUP 2021-2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
