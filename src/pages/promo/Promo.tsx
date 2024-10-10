import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";
import promoImg1 from "../../assets/bannerimg1.jpg";
import promoImg2 from "../../assets/bannerimg2.jpg";
import promoImg3 from "../../assets/bannerimg3.jpg";
import promoImg4 from "../../assets/bannerimg4.jpg";
import promoImg5 from "../../assets/heroimg1.jpg";
import promoImg6 from "../../assets/heroimg2.jpg";
import promoImg7 from "../../assets/heroimg3.jpg";
import promoImg8 from "../../assets/heroimg4.jpg";
import promoImg9 from "../../assets/heroimg5.jpg";
import promoImg10 from "../../assets/heroimg6.jpg";
import SideBar from "./sidebar/SideBar";

const brands = [
  {
    name: "OLAPLEX",
    description: "Сила профессионального ухода для безупречных волос",
    image: slide1,
  },
  {
    name: "MAREVE",
    description: "Скидка 20% на набор",
    image: slide2,
  },
  {
    name: "NaturalME",
    description:
      "При покупке любого продукта NaturalME - крем Derma в подарок!",
    image: slide3,
  },
  {
    name: "Paloma",
    description: "При покупке двух товаров Paloma Cosmetics третий в подарок",
    image: slide4,
  },
  {
    name: "tanita",
    description: "При покупке двух товаров марки tanita третий в подарок!",
    image: slide5,
  },
];

const Promo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
      setIsLoading(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + brands.length) % brands.length
      );
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="max-w mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Акции</h2>
      <div className="flex gap-5">
        <SideBar />
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div
            className={`transition-opacity duration-300 ${
              isLoading ? "opacity-50" : "opacity-100"
            }`}
          >
            <img
              src={brands[currentIndex].image}
              alt={brands[currentIndex].name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="flex justify-center ml-60 mt-4 mb-10">
        {brands.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-colors duration-200 ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <div className="mr-60"></div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="rounded-lg transform duration-300 hover:scale-105"
            src={promoImg1}
            alt="promoImg"
          />
          <img
            className="rounded-lg transform duration-300 hover:scale-105"
            src={promoImg2}
            alt="promoImg"
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="mr-60"></div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="rounded-lg transform duration-300 hover:scale-105"
            src={promoImg3}
            alt="promoImg"
          />
          <img
            className="rounded-lg transform duration-300 hover:scale-105"
            src={promoImg4}
            alt="promoImg"
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="mr-60"></div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="rounded-lg transform duration-300 hover:scale-105"
            src={promoImg5}
            alt="promoImg"
          />
          <img
            className="rounded-lg transform duration-300 hover:scale-105"
            src={promoImg6}
            alt="promoImg"
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="mr-60"></div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="rounded-lg transform duration-300 hover:scale-105"
            src={promoImg7}
            alt="promoImg"
          />
          <img
            className="rounded-lg transform duration-300 hover:scale-105"
            src={promoImg8}
            alt="promoImg"
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="mr-60"></div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="rounded-lg transform duration-300 hover:scale-105"
            src={promoImg9}
            alt="promoImg"
          />
          <img
            className="rounded-lg transform duration-300 hover:scale-105"
            src={promoImg10}
            alt="promoImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;
