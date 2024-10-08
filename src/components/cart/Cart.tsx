import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/index';
import { removeFromCart, updateQuantity, clearCart } from '../../features/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // const currentCurrency = useSelector((state: RootState) => state.currency.currentCurrency);
  // const exchangeRates = useSelector((state: RootState) => state.currency.exchangeRates);

  // const convertPrice = (price: string) => {
  //   const numericPrice = parseFloat(price);
  //   if (isNaN(numericPrice)) return price;
  //   const convertedPrice = numericPrice * exchangeRates[currentCurrency];
  //   return convertedPrice.toFixed(2);
  // };

  // const totalPrice = cartItems.reduce((total, item) => {
  //   return total + parseFloat(convertPrice(item.price)) * item.quantity;
  // }, 0);

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return <div className="text-center text-xl">Your cart is empty</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <img
              src={item.image_link}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.brand}</p>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
              className="w-16 text-center border rounded p-1 mr-4"
            />
            <p className="text-lg font-bold mr-4">
              {/* {currentCurrency} {(parseFloat(convertPrice(item.price)) * item.quantity).toFixed(2)} */}
            </p>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={handleClearCart}
          className="btn btn-secondary"
        >
          Clear Cart
        </button>
        <div className="text-2xl font-bold">
          {/* Total: {currentCurrency} {totalPrice.toFixed(2)} */}
        </div>
      </div>
    </div>
  );
};

export default Cart;