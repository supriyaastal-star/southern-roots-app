import React from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 text-center max-w-lg w-full">

        <FiCheckCircle className="text-7xl text-green-600 mx-auto" />

        <h1 className="text-3xl font-bold text-gray-900 mt-6">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-500 mt-3 leading-6">
          Thank you for shopping with Southern Roots.
          Your order has been placed successfully.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mt-6">
          <p className="text-sm text-gray-500">
            Order ID
          </p>

          <p className="font-bold text-gray-900 mt-1">
            SR-{Math.floor(100000 + Math.random() * 900000)}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-7">

          <Link
            to="/products"
            className="flex-1 bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-semibold"
          >
            Go to Home
          </Link>

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;