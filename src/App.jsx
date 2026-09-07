import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Account from "./pages/Account/Account";
import Orders from "./pages/Orders/Orders";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
  <Header />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:slug" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/order-success" element={<OrderSuccess />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/account" element={<Account />} />
    <Route path="/orders" element={<Orders />} />
  </Routes>

  <Footer />
</BrowserRouter>
    </CartProvider>
  );
}

export default App;