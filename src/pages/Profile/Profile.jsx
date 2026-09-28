import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiUser,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

const getInitialProfileData = () => {
  try {
    const activeUser = JSON.parse(localStorage.getItem("southernRootsActiveUser") || "null");
    const savedProfile = JSON.parse(localStorage.getItem("southernRootsProfile") || "{}");

    return {
      name: savedProfile.name || activeUser?.name || "Ananya Nair",
      email: savedProfile.email || activeUser?.email || "ananya.nair@gmail.com",
      phone: savedProfile.phone || activeUser?.phone || "+91 98765 43210",
      memberSince: savedProfile.memberSince || "January 2025",
      city: savedProfile.city || activeUser?.city || "Bengaluru",
      state: savedProfile.state || activeUser?.state || "Karnataka",
    };
  } catch (error) {
    console.error("Failed to read profile data:", error);
    return {
      name: "Ananya Nair",
      email: "ananya.nair@gmail.com",
      phone: "+91 98765 43210",
      memberSince: "January 2025",
      city: "Bengaluru",
      state: "Karnataka",
    };
  }
};

const Profile = () => {
  const [profileData, setProfileData] = useState(() => getInitialProfileData());
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfileData((prev) => ({
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
        name: profileData.name,
        email: profileData.email,
        phone: profileData.phone,
        city: profileData.city,
        state: profileData.state,
      };

      localStorage.setItem("southernRootsActiveUser", JSON.stringify(updatedUser));
      localStorage.setItem("southernRootsProfile", JSON.stringify(profileData));
    } catch (error) {
      console.error("Failed to save profile:", error);
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
            Profile
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <FiUser className="text-3xl text-green-700" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {profileData.name}
              </h2>
              <p className="text-gray-500 mt-1">
                {profileData.email}
              </p>
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
                value={profileData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-green-600"
                />
              </div>
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
                  value={profileData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-green-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>

              <input
                type="text"
                name="city"
                value={profileData.city}
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
                value={profileData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Member Since
              </label>

              <div className="relative">
                <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="memberSince"
                  value={profileData.memberSince}
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
                setProfileData(getInitialProfileData());
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
              Save Profile
            </button>
          </div>

          {isSaved && (
            <p className="mt-4 text-sm text-green-700 font-medium">
              Profile updated successfully.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
