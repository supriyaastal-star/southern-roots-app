import React from "react";
import categories from "../../data/categories";
import products from "../../data/products";

import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Banner */}
     <section
  className="relative bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/hero.jpg')" }}
>
  {/* Dark green overlay */}
  <div className="absolute inset-0 bg-green-900/70"></div>

  <div className="relative max-w-7xl mx-auto px-4 py-14 sm:py-20">
    <div className="max-w-2xl text-white">

      <p className="text-orange-300 font-medium mb-3">
        AUTHENTIC SOUTH INDIAN PRODUCTS
      </p>

      <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
        Taste the Tradition of Southern India
      </h1>

      <p className="mt-5 text-green-100 text-lg">
        Discover authentic spices, masalas, snacks and
        everyday essentials from South India.
      </p>

      <button className="mt-7 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
        Shop Now
      </button>

    </div>
  </div>
</section>


      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Shop by Category
          </h2>

         <Link
  to="/products"
  className="text-green-700 font-medium"
>
  View All
</Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </section>


      {/* Popular Products */}
      <section className="max-w-7xl mx-auto px-4 py-8">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Popular Products
          </h2>

        <Link
  to="/products"
  className="text-green-700 font-medium"
>
  View All
</Link>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>


      {/* All Products */}
      <section className="max-w-7xl mx-auto px-4 py-8 pb-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Explore Our Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;