"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ThemeToggle from "../theme/ThemeToggle";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Mobile Phones
      </h1>
      <ThemeToggle />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            desc={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
