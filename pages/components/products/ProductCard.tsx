"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  title: string;
  desc: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, desc, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-80 mx-auto"
      role="article"
      aria-label={title}
    >
      <div className="overflow-hidden rounded-t-2xl flex justify-around">
        <Image
          src={image}
          alt={title}
          width={400}
          unoptimized
          height={300}
          className="w-auto h-72 object-cover rounded-t-xl"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-52">
        <div>
          <h2 className="text-lg font-bold text-center text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 text-center">
            {desc}
          </p>
        </div>

        <button
          aria-label={`View more about ${title}`}
          className="mt-4 bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-colors"
        >
          View More
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
