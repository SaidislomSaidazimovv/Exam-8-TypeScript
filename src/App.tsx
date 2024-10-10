import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductList from "./components/product/ProductList";
import SingleProduct from "./components/product/SingleProduct";
import Like from "./components/like/Like";
import Cart from "./components/cart/Cart";
import Search from "./components/search/Search";
import "./App.css";
import Promo from "./pages/promo/Promo";
import Shipping from "./pages/shipping/Shipping";
import About from "./pages/about/About";
import BeautyClub from "./pages/beauty-club/BeautyClub";
import Parfume from "./pages/parfume/Parfume";
import CategoryPage from "./pages/category/Category";

const App: React.FC = () => {
  return (
    <div className="startCs flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/like" element={<Like />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/search"
            element={
              <Search
                isOpen={false}
                onClose={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />

          <Route path="/promo" element={<Promo />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/about" element={<About />} />
          <Route path="/beauty-club" element={<BeautyClub />} />

          <Route path="/perfumery" element={<Parfume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
