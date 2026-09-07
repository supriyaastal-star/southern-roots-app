import React, { useMemo, useState } from "react";
import { FiSearch, FiFilter, FiX } from "react-icons/fi";

import products from "../../data/products";
import categories from "../../data/categories";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchFromUrl = searchParams.get("search") || "";
const categoryFromUrl = searchParams.get("category") || "";
const [search, setSearch] = useState(searchFromUrl);
const [selectedCategory, setSelectedCategory] = useState(
  categoryFromUrl || "All"
);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

 const filteredProducts = useMemo(() => {
  return products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
}, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            All Products
          </h1>

          <p className="text-gray-500 mt-1">
            Explore our authentic South Indian products
          </p>

        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Search + Mobile Filter */}
        <div className="flex gap-3 mb-6">

          <div className="relative flex-1">

            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-green-600"
            />

          </div>

          <button
            onClick={() => setShowMobileFilter(true)}
            className="lg:hidden flex items-center gap-2 bg-green-700 text-white px-4 rounded-lg"
          >
            <FiFilter />
            Filter
          </button>

        </div>


        <div className="flex gap-6">

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-60 shrink-0">

            <div className="bg-white rounded-xl border p-5">

              <h2 className="font-bold text-lg mb-4">
                Categories
              </h2>

              <div className="space-y-1">

                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`w-full text-left px-3 py-2 rounded-lg ${
                    selectedCategory === "All"
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  All Products
                </button>

                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg ${
                      selectedCategory === category.name
                        ? "bg-green-50 text-green-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}

              </div>

            </div>

          </aside>


          {/* Products */}
          <main className="flex-1">

            <div className="flex items-center justify-between mb-5">

              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">
                  {filteredProducts.length}
                </span>{" "}
                products found
              </p>

              {selectedCategory !== "All" && (
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="text-sm text-green-700"
                >
                  Clear filter
                </button>
              )}

            </div>


            {filteredProducts.length > 0 ? (

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

              </div>

            ) : (

              <div className="bg-white rounded-xl border p-10 text-center">

                <h2 className="text-xl font-semibold text-gray-800">
                  No products found
                </h2>

                <p className="text-gray-500 mt-2">
                  Try searching for another product.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                  className="mt-5 bg-green-700 text-white px-5 py-2 rounded-lg"
                >
                  View All Products
                </button>

              </div>

            )}

          </main>

        </div>

      </div>


      {/* Mobile Filter Drawer */}
      {showMobileFilter && (
        <div className="fixed inset-0 z-[100] lg:hidden">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowMobileFilter(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white p-5 overflow-y-auto">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-xl font-bold">
                Categories
              </h2>

              <button
                onClick={() => setShowMobileFilter(false)}
                className="text-2xl"
              >
                <FiX />
              </button>

            </div>

            <button
              onClick={() => {
                setSelectedCategory("All");
                setShowMobileFilter(false);
              }}
              className={`w-full text-left px-3 py-3 rounded-lg mb-1 ${
                selectedCategory === "All"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-gray-700"
              }`}
            >
              All Products
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setShowMobileFilter(false);
                }}
                className={`w-full text-left px-3 py-3 rounded-lg mb-1 ${
                  selectedCategory === category.name
                    ? "bg-green-50 text-green-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}

          </div>

        </div>
      )}

    </div>
  );
};

export default Products;