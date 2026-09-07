import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiLock, FiMail } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend login
    console.log("Login Data:", formData);

    navigate("/account");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-700 mb-5"
        >
          <FiArrowLeft />
          Back to Home
        </Link>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">

          {/* Heading */}
          <div className="text-center mb-8">
            <div className="text-2xl font-bold">
              <span className="text-orange-500">SOUTHERN</span>{" "}
              <span className="text-green-700">ROOTS</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mt-6">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2">
              Login to continue shopping
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

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
                  placeholder="Enter your password"
                  required
                  className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-green-600"
                />
              </div>
            </div>

            {/* Login */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </form>

          {/* Signup */}
          <div className="text-center mt-6">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-green-700 font-semibold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;