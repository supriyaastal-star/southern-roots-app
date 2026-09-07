import React from "react";
import { Link } from "react-router-dom";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  const deliveryCharge = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

        <div className="text-center">

          <FiShoppingBag className="text-6xl text-gray-300 mx-auto" />

          <h1 className="text-2xl font-bold text-gray-800 mt-5">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mt-2">
            Add some delicious Southern Roots products.
          </p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Start Shopping
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 py-8">

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          My Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl p-4"
              >

                <div className="flex gap-4">

                  {/* Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 rounded-lg shrink-0">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                    />

                  </div>

                  {/* Details */}
                  <div className="flex-1">

                    <div className="flex justify-between gap-3">

                      <div>

                        <h2 className="font-semibold text-gray-900">
                          {item.name}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.unit}
                        </p>

                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <FiTrash2 />
                      </button>

                    </div>

                    <div className="flex items-center justify-between mt-5">

                      {/* Quantity */}
                      <div className="flex items-center border rounded-lg">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="w-9 h-9 flex items-center justify-center hover:bg-gray-100"
                        >
                          <FiMinus />
                        </button>

                        <span className="w-10 text-center font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="w-9 h-9 flex items-center justify-center hover:bg-gray-100"
                        >
                          <FiPlus />
                        </button>

                      </div>

                      {/* Price */}
                      <p className="font-bold text-gray-900">
                        ₹{item.price * item.quantity}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>


          {/* Summary */}
          <div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">

              <h2 className="text-xl font-bold mb-6">
                Price Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>₹{deliveryCharge}</span>
                </div>

                <div className="border-t pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

              <Link
                to="/checkout"
                className="block text-center mt-6 bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
              >
                Proceed to Checkout
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;