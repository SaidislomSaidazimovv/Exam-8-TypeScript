import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Shipping = () => {
  const [city, setCity] = useState("");

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching shipping options for: ${city}`);
  };

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-xl font-semibold mb-4">
        Доставляем счастье. Бесплатно.
      </h2>
      <p className="text-center mb-6">
        Введите название вашего населенного пункта, и мы предложим варианты
        доставки
      </p>

      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-md">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Введите ваш город"
          className="bg-transparent outline-none w-64 p-2"
        />
        <button
          onClick={handleSearch}
          className="text-gray-500 hover:text-gray-700 ml-2"
        >
          <AiOutlineSearch size={24} />
        </button>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">1 вариант доставки</h3>
        <div className="flex items-start bg-white border rounded-lg shadow-lg p-4 mt-4 w-full max-w-md">
          <div className="mr-4 text-purple-500">
            <AiOutlineSearch size={32} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Доставка курьером
            </h4>
            <p className="text-sm text-gray-600">
              Бесплатная доставка курьером, минимальная сумма заказа — 99 000
              сумов. Заказ будет отправлен из ЕС. Доставка осуществляется в
              течение 8-11 раб. дней.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
