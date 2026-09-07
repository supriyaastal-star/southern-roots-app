import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiPackage,
  FiChevronRight,
} from "react-icons/fi";

const Orders = () => {
  // Temporary mock orders
  const orders = [
    {
      id: "SR-102458",
      date: "04 Sep 2026",
      status: "Delivered",
      total: 520,
      items: [
        {
          name: "Sambar Powder",
          quantity: 2,
          price: 120,
          image: "/products/sambar-powder.jpg",
        },
        {
          name: "Rasam Powder",
          quantity: 1,
          price: 110,
          image: "/products/rasam-powder.jpg",
        },
      ],
    },
    {
      id: "SR-102321",
      date: "28 Aug 2026",
      status: "Processing",
      total: 390,
      items: [
        {
          name: "Idli Rice",
          quantity: 1,
          price: 180,
          image: "/products/idli-rice.jpg",
        },
        {
          name: "Ragi Flour",
          quantity: 1,
          price: 140,
          image: "/products/ragi-flour.jpg",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/account"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-700"
          >
            <FiArrowLeft />
            Back to Account
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mt-5">
            My Orders
          </h1>

          <p className="text-gray-500 mt-1">
            View your previous orders and order details.
          </p>
        </div>

        {/* Orders */}
        <div className="space-y-5">

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >

              {/* Order Header */}
              <div className="p-5 border-b bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

                  <div>
                    <p className="text-sm text-gray-500">
                      Order ID
                    </p>

                    <p className="font-bold text-gray-900 mt-1">
                      {order.id}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Order Date
                    </p>

                    <p className="font-medium text-gray-800 mt-1">
                      {order.date}
                    </p>
                  </div>

                  <div>
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                </div>
              </div>

              {/* Order Items */}
              <div className="p-5 space-y-4">

                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="w-20 h-20 bg-gray-50 rounded-lg shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-gray-900">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}

              </div>

              {/* Order Footer */}
              <div className="border-t p-5 flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Total Amount
                  </p>

                  <p className="text-xl font-bold text-gray-900 mt-1">
                    ₹{order.total}
                  </p>
                </div>

                <button className="flex items-center gap-1 text-green-700 font-semibold">
                  View Details
                  <FiChevronRight />
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            <FiPackage />
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Orders;