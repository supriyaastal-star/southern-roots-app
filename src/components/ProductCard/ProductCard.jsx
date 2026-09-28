import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const discountPercent = product.discountPercent ?? ((product.id % 5) * 5 + 20);
  const originalPrice = product.originalPrice || Math.round(product.price / (1 - discountPercent / 100));

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">

      {/* Product Image */}
      <Link to={`/products/${product.slug}`}>
        <div className="relative bg-gray-50 cursor-pointer">
          <span className="absolute left-3 top-3 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 via-emerald-500 to-green-700 text-white shadow-[0_8px_20px_rgba(22,163,74,0.45)] border-2 border-white/90">
            <span className="flex flex-col items-center justify-center text-center leading-none">
              <span className="text-base font-black tracking-tight">{discountPercent}%</span>
              <span className="mt-0.5 text-[7px] font-bold tracking-[0.15em]">OFF</span>
            </span>
          </span>

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

          <div>
            <div className="text-sm text-gray-400 line-through">
              ₹{originalPrice}
            </div>
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed bg-[#5c2507] hover:bg-[#4e1f05] text-white px-3 py-2 rounded-lg text-sm font-medium transition"
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