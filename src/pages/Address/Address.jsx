import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiMapPin, FiHome, FiPhone } from "react-icons/fi";

const getInitialDeliveryAddress = () => {
  try {
    const activeUser = JSON.parse(localStorage.getItem("southernRootsActiveUser") || "null");
    const savedAddress = JSON.parse(localStorage.getItem("southernRootsAddress") || "{}");

    return {
      name: savedAddress.name || activeUser?.name || "Ananya Nair",
      phone: savedAddress.phone || activeUser?.phone || "+91 98765 43210",
      address: savedAddress.address || "24, Green Valley Lane",
      area: savedAddress.area || "Koramangala",
      city: savedAddress.city || activeUser?.city || "Bengaluru",
      state: savedAddress.state || activeUser?.state || "Karnataka",
      pincode: savedAddress.pincode || "560034",
      landmark: savedAddress.landmark || "Near Forum Mall",
    };
  } catch (error) {
    console.error("Failed to read address data:", error);
    return {
      name: "Ananya Nair",
      phone: "+91 98765 43210",
      address: "24, Green Valley Lane",
      area: "Koramangala",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560034",
      landmark: "Near Forum Mall",
    };
  }
};

const Address = () => {
  const [deliveryAddress, setDeliveryAddress] = useState(() => getInitialDeliveryAddress());
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDeliveryAddress((prev) => ({
      ...prev,
      [name]: value,
    }));

    setIsSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const activeUser = JSON.parse(localStorage.getItem("southernRootsActiveUser") || "null") || {};
      const updatedUser = {
        ...activeUser,
        name: deliveryAddress.name,
        phone: deliveryAddress.phone,
        city: deliveryAddress.city,
        state: deliveryAddress.state,
        address: deliveryAddress.address,
      };

      localStorage.setItem("southernRootsActiveUser", JSON.stringify(updatedUser));
      localStorage.setItem("southernRootsAddress", JSON.stringify(deliveryAddress));
    } catch (error) {
      console.error("Failed to save address:", error);
    }

    setIsSaved(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/account"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-700"
          >
            <FiArrowLeft />
            Back to Account
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mt-5">
            Delivery Address
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-4 pb-5 border-b border-gray-200">
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
              <FiHome className="text-2xl text-green-700" />
            </div>

            <div>
              <p className="text-sm text-green-700 font-medium uppercase tracking-wide">
                Default Address
              </p>
              <h2 className="text-xl font-bold text-gray-900 mt-1">
                {deliveryAddress.name}
              </h2>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={deliveryAddress.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>

              <textarea
                name="address"
                value={deliveryAddress.address}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area / Locality
              </label>

              <input
                type="text"
                name="area"
                value={deliveryAddress.area}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Landmark
              </label>

              <input
                type="text"
                name="landmark"
                value={deliveryAddress.landmark}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>

              <input
                type="text"
                name="city"
                value={deliveryAddress.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>

              <input
                type="text"
                name="state"
                value={deliveryAddress.state}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pincode
              </label>

              <input
                type="text"
                name="pincode"
                value={deliveryAddress.pincode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>

              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={deliveryAddress.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-green-600"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="button"
              onClick={() => {
                setDeliveryAddress(getInitialDeliveryAddress());
                setIsSaved(false);
              }}
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-3 rounded-lg font-semibold transition"
            >
              Reset
            </button>

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-lg font-semibold transition"
            >
              Save Address
            </button>
          </div>

          {isSaved && (
            <p className="mt-4 text-sm text-green-700 font-medium">
              Delivery address updated successfully.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Address;
