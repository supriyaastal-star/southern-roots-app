import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

const getLocalDateString = (date) => {
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60 * 1000);
  return localDate.toISOString().split("T")[0];
};

const getNextDates = (count = 5) => {
  const dates = [];

  for (let i = 0; i < count; i += 1) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(getLocalDateString(date));
  }

  return dates;
};

const deliverySlots = {
  weekday: [
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
  ],
  weekend: [
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
  ],
};

const Checkout = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const nextDates = getNextDates();

  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [selectedDate, setSelectedDate] = useState(nextDates[0]);
  const [timeSlot, setTimeSlot] = useState("");

  const selectedDay = new Date(`${selectedDate}T00:00:00`).getDay();
  const availableSlots = selectedDay === 0 || selectedDay === 6
    ? deliverySlots.weekend
    : deliverySlots.weekday;

  const deliveryCharge = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryCharge;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!selectedDate || !timeSlot) {
      return;
    }

    // Temporary frontend order flow
    clearCart();

    navigate("/order-success", {
      state: {
        date: selectedDate,
        timeSlot,
      },
    });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Your cart is empty
          </h1>

          <p className="text-gray-500 mt-2">
            Please add products before checkout.
          </p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-700"
          >
            <FiArrowLeft />
            Back to Cart
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mt-5">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Delivery Address */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handlePlaceOrder}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h2 className="text-xl font-bold text-gray-900">
                Delivery Address
              </h2>

              <p className="text-sm text-gray-500 mt-1 mb-6">
                Enter your delivery details
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Date
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {nextDates.map((date) => {
                      const dateLabel = new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      });

                      return (
                        <label
                          key={date}
                          className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition ${
                            selectedDate === date
                              ? "border-green-600 bg-green-50 text-green-800"
                              : "border-gray-300 hover:border-green-400 text-gray-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name="deliveryDate"
                            value={date}
                            checked={selectedDate === date}
                            onChange={() => {
                              setSelectedDate(date);
                              setTimeSlot("");
                            }}
                            required
                            className="accent-green-700"
                          />
                          <span className="font-medium">{dateLabel}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Delivery Time Slot
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableSlots.map((slot) => (
                      <label
                        key={slot}
                        className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition ${
                          timeSlot === slot
                            ? "border-green-600 bg-green-50 text-green-800"
                            : "border-gray-300 hover:border-green-400 text-gray-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeSlot"
                          value={slot}
                          checked={timeSlot === slot}
                          onChange={() => setTimeSlot(slot)}
                          required
                          className="accent-green-700"
                        />
                        <span className="font-medium">{slot}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={address.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={address.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>

                  <textarea
                    name="address"
                    value={address.address}
                    onChange={handleChange}
                    placeholder="House No, Street, Area"
                    rows="4"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600 resize-none"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    value={address.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white py-3.5 rounded-lg font-semibold transition"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:sticky lg:top-24">

              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3"
                  >
                    <div className="w-16 h-16 bg-gray-50 rounded-lg shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="font-medium text-gray-800">
                        {item.name}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.quantity} × ₹{item.price}
                      </p>
                    </div>

                    <p className="font-semibold text-gray-800">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t mt-6 pt-5 space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>₹{deliveryCharge}</span>
                </div>

                <div className="border-t pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

              <div className="mt-5 bg-green-50 rounded-lg p-4">
                <div className="flex gap-2 text-green-700">
                  <FiCheck className="mt-0.5 shrink-0" />

                  <p className="text-sm">
                    Your order will be delivered to the address provided above.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;