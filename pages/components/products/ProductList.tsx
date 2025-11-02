// components/products/ProductList.tsx

import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Mobile Phones
      </h1>
      {/* <ThemeToggle /> */}

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
}
