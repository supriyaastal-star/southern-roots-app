import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(category.name)}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 text-center text-sm sm:text-base font-semibold text-gray-800 group-hover:text-green-700">
        {category.name}
      </h3>
    </Link>
  );
};

export default CategoryCard;