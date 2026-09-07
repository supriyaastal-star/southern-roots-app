import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiUser,
  FiMapPin,
  FiMenu,
  FiX,
  FiHome,
  FiPackage,
  FiLogIn,
} from "react-icons/fi";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(
      `/products?search=${encodeURIComponent(search.trim())}`
    );

    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">

          <div className="flex items-center justify-between gap-4">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-2xl text-gray-700"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold whitespace-nowrap"
            >
                <img src="" alt="logo"/>
              {/* <span className="text-orange-500">SOUTHERN</span>{" "}
              <span className="text-green-700">ROOTS</span> */}
            </Link>

            {/* Location */}
            <div className="hidden lg:flex items-center gap-2 text-gray-600">
              <FiMapPin className="text-green-700 text-xl" />

              <div>
                <p className="text-xs text-gray-500">
                  Deliver to
                </p>

                <p className="text-sm font-medium">
                  Select Location
                </p>
              </div>
            </div>

            {/* Desktop Search */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex flex-1 max-w-xl"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-green-600"
              />
            </form>

            {/* Account */}
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 text-gray-700 hover:text-green-700"
            >
              <FiUser className="text-xl" />
              <span>Account</span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center gap-2 text-gray-700 hover:text-green-700"
            >
              <FiShoppingCart className="text-2xl" />

              <span className="hidden md:block">
                Cart
              </span>

              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </Link>
          </div>

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="md:hidden mt-3"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-green-600"
            />
          </form>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeMenu}
          />

          {/* Menu Drawer */}
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-xl">

            {/* Menu Header */}
            <div className="flex items-center justify-between p-5 border-b">

              <Link
                to="/"
                onClick={closeMenu}
                className="text-xl font-bold"
              >
                <span className="text-orange-500">
                  SOUTHERN
                </span>{" "}
                <span className="text-green-700">
                  ROOTS
                </span>
              </Link>

              <button
                onClick={closeMenu}
                className="text-2xl text-gray-600"
                aria-label="Close menu"
              >
                <FiX />
              </button>

            </div>

            {/* Menu Items */}
            <nav className="p-4">

              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700"
              >
                <FiHome className="text-xl text-green-700" />
                <span>Home</span>
              </Link>

              <Link
                to="/products"
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700"
              >
                <FiPackage className="text-xl text-green-700" />
                <span>All Products</span>
              </Link>

              <Link
                to="/account"
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700"
              >
                <FiUser className="text-xl text-green-700" />
                <span>My Account</span>
              </Link>

              <Link
                to="/cart"
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700"
              >
                <FiShoppingCart className="text-xl text-green-700" />
                <span>My Cart</span>

                {totalItems > 0 && (
                  <span className="ml-auto bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>

              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700"
              >
                <FiLogIn className="text-xl text-green-700" />
                <span>Login</span>
              </Link>

            </nav>

            {/* Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t p-5">

              <p className="text-xs text-gray-400">
                © 2026 Southern Roots
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Authentic South Indian Products
              </p>

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Header;