import React, { useState } from "react";
import { useGetProductsQuery } from "../../services/makeupApi";
import ProductCard from "./ProductCard";
import ImageCarousel from "../carousel/Carousel";
import CategoryCarousel from "./category/CategoryProductList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mainImg1 from "../../assets/mainImg1.jpg";
import mainImg2 from "../../assets/mainImg2.jpg";
import mainImg5 from "../../assets/mainimg5.jpg";
import mainImg6 from "../../assets/mainimg6.jpg";
import mainImg3 from "../../assets/mainimg3.jpg";
import mainImg4 from "../../assets/mainimg4.jpg";
import mainImg7 from "../../assets/mainimg7.jpg";
import mainImg8 from "../../assets/mainimg8.jpg";
import mainImg9 from "../../assets/mainimg-9.jpg";
import mainImg10 from "../../assets/mainimg-10.jpg";
import mainImg11 from "../../assets/mainimg11.jpg";
import mainImg12 from "../../assets/mainimg12.jpg";
import heroImg1 from "../../assets/heroimg1.jpg";
import heroImg2 from "../../assets/heroimg2.jpg";
import heroImg3 from "../../assets/heroimg3.jpg";
import heroImg4 from "../../assets/heroimg4.jpg";
import heroImg5 from "../../assets/heroimg5.jpg";
import heroImg6 from "../../assets/heroimg6.jpg";
import seperateImg1 from "../../assets/seperateimg1.jpg";
import seperateImg2 from "../../assets/seperateimg2.jpg";
import seperateImg3 from "../../assets/seperateimg3.jpg";
import seperateImg4 from "../../assets/seperateimg4.jpg";
import bannerImg1 from "../../assets/bannerimg1.jpg";
import bannerImg2 from "../../assets/bannerimg2.jpg";
import bannerImg3 from "../../assets/bannerimg3.jpg";
import bannerImg4 from "../../assets/bannerimg4.jpg";

const ProductList: React.FC = () => {
  const [category] = useState<string | null>(null);
  const { data: products, isLoading, error } = useGetProductsQuery();

  const filteredProducts = category
    ? products?.filter((product) => product.product_type === category)
    : products;

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <ImageCarousel />

      <CategoryCarousel />

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

      <div>
        <h2 className="flex items-center justify-center font-semibold text-3xl mt-10 mb-16">
          Предложения брендов
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts?.slice(50, 55).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-16 rounded-lg mx-5 bg-gray-100 py-10 px-10">
        <div className="flex items-center">
          <img className="mr-20 w-[130px]" src={mainImg1} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Помада супер , у меня почти все цвета, пользуюсь много лет,после
              нее не могу пользоваться другими,реально зе бест)Супер
              стойкая,супер насыщенная и не сушит губы как некоторые аналоги....
            </p>
            <p className="mt-4">Анна</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="mr-20 w-[90px]" src={mainImg2} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Помада супер , у меня почти все цвета, пользуюсь много лет,после
              нее не могу пользоваться другими,реально зе бест)Супер
              стойкая,супер насыщенная и не сушит губы как некоторые аналоги....
            </p>
            <p className="mt-4">Милена</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="flex items-center justify-center font-semibold text-3xl mb-16 mt-10">
          Парфюмерия
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts?.slice(80, 85).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-10 mt-24 mx-5">
        <div className="relative group">
          <img
            className="w-[100%] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={mainImg5}
            alt="mainImg"
          />
        </div>
        <div className="relative group">
          <img
            className="w-[100%] =mr-5 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={mainImg6}
            alt="mainImg"
          />
        </div>
      </div>

      <div className="flex justify-between mt-16 rounded-lg mx-5 bg-gray-100 py-10 px-10">
        <div className="flex items-center">
          <img className="mr-20 w-[120px]" src={mainImg3} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              мои любимые духи, сначала очень странные но потом классно
              раскрываются, прикольные)) многие говорят, что похоже на мыло, я
              люблю такие запахи...
            </p>
            <p className="mt-4">Анна</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="mr-20 w-[80px]" src={mainImg4} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              мои любимые духи, сначала очень странные но потом классно
              раскрываются, прикольные)) многие говорят, что похоже на мыло, я
              люблю такие запахи...
            </p>
            <p className="mt-4">Милена</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="flex items-center mt-10 justify-center font-semibold text-3xl mb-16">
          Макияж
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts?.slice(140, 145).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-10 mt-24 mx-5">
        <div className="relative group">
          <img
            className="w-[100%] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={heroImg5}
            alt="mainImg"
          />
        </div>
        <div className="relative group">
          <img
            className="w-[100%] =mr-5 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={heroImg6}
            alt="mainImg"
          />
        </div>
      </div>

      <div className="flex justify-between mt-16 rounded-lg mx-5 bg-gray-100 py-10 px-10">
        <div className="flex items-center">
          <img className="mr-20 w-[70px]" src={mainImg9} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Тушь замечательная. Наносить такой кисточкой легко и приятно)
              Держится на ресницах тушь уверенно, смывается мицеллярной водой
              легко 😊...
            </p>
            <p className="mt-4">Анна</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="mr-20 w-[45px]" src={mainImg10} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Тушь замечательная. Наносить такой кисточкой легко и приятно)
              Держится на ресницах тушь уверенно, смывается мицеллярной водой
              легко 😊...
            </p>
            <p className="mt-4">Милена</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="flex items-center mt-10 justify-center font-semibold text-3xl mb-16">
          Волосы
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts?.slice(235, 240).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-10 mt-24 mx-5">
        <div className="relative group">
          <img
            className="w-[100%] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={heroImg3}
            alt="mainImg"
          />
        </div>
        <div className="relative group">
          <img
            className="w-[100%] =mr-5 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={heroImg4}
            alt="mainImg"
          />
        </div>
      </div>

      <div className="flex justify-between mt-16 rounded-lg mx-5 bg-gray-100 py-10 px-10">
        <div className="flex items-center">
          <img className="mr-20 w-[185px]" src={mainImg7} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Шампунь гарний. Задоволена. Беру вже не перший раз.
            </p>
            <p className="mt-4">Анна</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="mr-20 w-[105px]" src={mainImg8} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Я покупала не здесь, но хотела бы поделиться отзывом. Очень
              понравился шампунь и бальзам из серии. У меня густые, длинные,
              окрашенные волосы. Подошёл идеально и запах очень приятный и
              свежий. Расход в...
            </p>
            <p className="mt-4">Милена</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="flex items-center mt-10 justify-center font-semibold text-3xl mb-16">
          Лицо
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts?.slice(270, 275).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-10 mt-24 mx-5">
        <div className="relative group">
          <img
            className="w-[100%] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={heroImg2}
            alt="mainImg"
          />
        </div>
        <div className="relative group">
          <img
            className="w-[100%] =mr-5 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={heroImg1}
            alt="mainImg"
          />
        </div>
      </div>

      <div className="flex justify-between mt-16 rounded-lg mx-5 bg-gray-100 py-10 px-10">
        <div className="flex items-center">
          <img className="mr-20 w-[90px]" src={mainImg11} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Крем приятный по структуре,запах неплохой,пока результата не
              увидела,,,,работа по доставке отличная,спасибо за скорость, всё
              прибыло супербыстро!...
            </p>
            <p className="mt-4">Анна</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="mr-20 w-[175px]" src={mainImg12} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Крем приятный по структуре,запах неплохой,пока результата не
              увидела,,,,работа по доставке отличная,спасибо за скорость, всё
              прибыло супербыстро!...
            </p>
            <p className="mt-4">Милена</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="flex items-center mt-10 justify-center font-semibold text-3xl mb-10">
          Тело и ванна
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts?.slice(490, 495).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-10 mt-24 mx-5">
        <div className="relative group">
          <img
            className="w-[100%] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={bannerImg4}
            alt="mainImg"
          />
        </div>
        <div className="relative group">
          <img
            className="w-[100%] =mr-5 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={bannerImg2}
            alt="mainImg"
          />
        </div>
      </div>

      <div className="flex justify-between mt-16 rounded-lg mx-5 bg-gray-100 py-10 px-10">
        <div className="flex items-center">
          <img className="mr-20 w-[90px]" src={seperateImg1} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Крем приятный по структуре,запах неплохой,пока результата не
              увидела,,,,работа по доставке отличная,спасибо за скорость, всё
              прибыло супербыстро!...
            </p>
            <p className="mt-4">Анна</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="mr-20 w-[175px]" src={seperateImg2} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Крем приятный по структуре,запах неплохой,пока результата не
              увидела,,,,работа по доставке отличная,спасибо за скорость, всё
              прибыло супербыстро!...
            </p>
            <p className="mt-4">Милена</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="flex items-center mt-10 justify-center font-semibold text-3xl mb-16">
          Мужчинам
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts?.slice(760, 765).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-10 mt-24 mx-5">
        <div className="relative group">
          <img
            className="w-[100%] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={bannerImg3}
            alt="mainImg"
          />
        </div>
        <div className="relative group">
          <img
            className="w-[100%] =mr-5 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={bannerImg1}
            alt="mainImg"
          />
        </div>
      </div>

      <div className="flex justify-between mt-16 rounded-lg mx-5 bg-gray-100 py-10 px-10">
        <div className="flex items-center">
          <img className="mr-20 w-[125px]" src={seperateImg3} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Крем приятный по структуре,запах неплохой,пока результата не
              увидела,,,,работа по доставке отличная,спасибо за скорость, всё
              прибыло супербыстро!...
            </p>
            <p className="mt-4">Анна</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="mr-20 w-[140px]" src={seperateImg4} alt="mainImg" />
          <div>
            <p className="text-xl font-semibold w-80">
              Крем приятный по структуре,запах неплохой,пока результата не
              увидела,,,,работа по доставке отличная,спасибо за скорость, всё
              прибыло супербыстро!...
            </p>
            <p className="mt-4">Милена</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
