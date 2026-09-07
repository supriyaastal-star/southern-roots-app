import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiPackage,
  FiMapPin,
  FiLogOut,
  FiShoppingBag,
  FiChevronRight,
} from "react-icons/fi";

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Temporary frontend logout
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm text-green-700 font-medium">
            MY ACCOUNT
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-2">
            My Account
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your profile, orders and delivery details.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <FiUser className="text-3xl text-green-700" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Welcome, Customer
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                customer@example.com
              </p>
            </div>

          </div>
        </div>

        {/* Account Options */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

          {/* Orders */}
          <Link
            to="/orders"
            className="flex items-center gap-4 p-5 border-b hover:bg-gray-50 transition"
          >
            <div className="w-11 h-11 rounded-lg bg-green-50 flex items-center justify-center">
              <FiPackage className="text-xl text-green-700" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                My Orders
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                View your order history and order details
              </p>
            </div>

            <FiChevronRight className="text-gray-400" />
          </Link>

          {/* Address */}
          <div className="flex items-center gap-4 p-5 border-b">
            <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center">
              <FiMapPin className="text-xl text-orange-600" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                Delivery Address
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Manage your delivery address
              </p>
            </div>

            <FiChevronRight className="text-gray-400" />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4 p-5 border-b">
            <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center">
              <FiUser className="text-xl text-blue-600" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                Profile
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Manage your personal information
              </p>
            </div>

            <FiChevronRight className="text-gray-400" />
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-5 hover:bg-red-50 transition text-left"
          >
            <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center">
              <FiLogOut className="text-xl text-red-600" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-red-600">
                Logout
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Sign out from your account
              </p>
            </div>

            <FiChevronRight className="text-gray-400" />
          </button>

        </div>

        {/* Continue Shopping */}
        <div className="mt-6 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            <FiShoppingBag />
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Account;