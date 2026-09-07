import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Temporary frontend signup
    console.log("Signup Data:", formData);

    navigate("/account");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-700 mb-5"
        >
          <FiArrowLeft />
          Back to Home
        </Link>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">

          {/* Logo & Heading */}
          <div className="text-center mb-8">
            <div className="text-2xl font-bold">
              <span className="text-orange-500">SOUTHERN</span>{" "}
              <span className="text-green-700">ROOTS</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mt-6">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Create your Southern Roots account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-green-600"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-green-600"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-green-600"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-green-600"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
            >
              Create Account
            </button>
          </form>

          {/* Login */}
          <div className="text-center mt-6">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-700 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;