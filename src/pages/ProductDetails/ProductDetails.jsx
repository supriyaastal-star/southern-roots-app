import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiMinus,
  FiPlus,
  FiShoppingCart,
} from "react-icons/fi";

import products from "../../data/products";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
  const { slug } = useParams();
  const  {addToCart}  = useCart();

  const product = products.find(
    (item) => item.slug === slug
  );

  const [quantity, setQuantity] = useState(1);

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">

          <h1 className="text-2xl font-bold text-gray-800">
            Product Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            The product you are looking for does not exist.
          </p>

          <Link
            to="/products"
            className="inline-block mt-5 bg-green-700 text-white px-5 py-3 rounded-lg"
          >
            Back to Products
          </Link>

        </div>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-4 py-5">

        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-700"
        >
          <FiArrowLeft />
          Back to Products
        </Link>

      </div>


      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 pb-12">

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Product Image */}
            <div className="bg-gray-50 flex items-center justify-center min-h-[350px] md:min-h-[500px]">

              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md h-[350px] md:h-[450px] object-contain p-8"
              />

            </div>


            {/* Product Information */}
            <div className="p-6 sm:p-8 lg:p-12">

              {/* Category */}
              <p className="text-sm font-medium text-green-700">
                {product.category}
              </p>

              {/* Name */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
                {product.name}
              </h1>

              {/* Unit */}
              <p className="text-gray-500 mt-3">
                Pack Size: {product.unit}
              </p>

              {/* Price */}
              <div className="mt-6">

                <span className="text-3xl font-bold text-gray-900">
                  ₹{product.price}
                </span>

              </div>


              {/* Stock */}
              <div className="mt-4">

                {product.stock ? (
                  <span className="text-sm font-medium text-green-700">
                    ✓ In Stock
                  </span>
                ) : (
                  <span className="text-sm font-medium text-red-600">
                    Out of Stock
                  </span>
                )}

              </div>


              {/* Description */}
              <div className="mt-8">

                <h2 className="text-lg font-semibold text-gray-900">
                  Product Description
                </h2>

                <p className="text-gray-600 leading-7 mt-3">
                  {product.description}
                </p>

              </div>


              {/* Quantity */}
              <div className="mt-8">

                <p className="font-medium text-gray-800 mb-3">
                  Quantity
                </p>

                <div className="flex items-center border border-gray-300 rounded-lg w-fit">

                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    className="w-11 h-11 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40"
                  >
                    <FiMinus />
                  </button>

                  <span className="w-12 text-center font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={increaseQuantity}
                    className="w-11 h-11 flex items-center justify-center hover:bg-gray-100"
                  >
                    <FiPlus />
                  </button>

                </div>

              </div>


              {/* Add to Cart */}
             <button
  onClick={() => addToCart(product, quantity)}
  disabled={!product.stock}
  className="mt-8 w-full sm:w-auto flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white px-8 py-4 rounded-xl font-semibold transition"
>
  <FiShoppingCart className="text-xl" />
  Add to Cart
</button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;