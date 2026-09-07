import React from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold"
            >
              <span className="text-orange-400">
                SOUTHERN
              </span>{" "}
              <span className="text-green-400">
                ROOTS
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-6 mt-4">
              Bringing authentic South Indian spices,
              masalas, snacks and everyday essentials
              to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="space-y-3 text-sm">
              <Link
                to="/"
                className="block hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="block hover:text-white"
              >
                All Products
              </Link>

              <Link
                to="/account"
                className="block hover:text-white"
              >
                My Account
              </Link>

              <Link
                to="/orders"
                className="block hover:text-white"
              >
                My Orders
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Categories
            </h3>

            <div className="space-y-3 text-sm">
              <p>Masala & Spices</p>
              <p>Rice & Grains</p>
              <p>Flours</p>
              <p>Pickles</p>
              <p>Snacks</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex gap-3">
                <FiMapPin className="text-green-400 text-lg shrink-0 mt-0.5" />

                <p>
                  Pune, Maharashtra, India
                </p>
              </div>

              <div className="flex gap-3">
                <FiPhone className="text-green-400 text-lg shrink-0" />

                <p>
                  +91 00000 00000
                </p>
              </div>

              <div className="flex gap-3">
                <FiMail className="text-green-400 text-lg shrink-0" />

                <p>
                  support@southernroots.com
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">

          <p>
            © 2026 Southern Roots. All rights reserved.
          </p>

          <p>
            Authentic Taste. Southern Tradition.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;