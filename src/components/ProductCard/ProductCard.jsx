import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">

      {/* Product Image */}
      <Link to={`/products/${product.slug}`}>
        <div className="relative bg-gray-50 cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain p-4 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-4">

        <Link to={`/products/${product.slug}`}>
          <h3 className="font-semibold text-gray-800 line-clamp-2 min-h-12 hover:text-green-700">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mt-1">
          {product.unit}
        </p>

        <div className="flex items-center justify-between mt-4">

          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>

          <button
  onClick={() => addToCart(product)}
  className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
>
  <FiShoppingCart />
  Add
</button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;