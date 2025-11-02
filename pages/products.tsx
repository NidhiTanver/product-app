// pages/products.js

import ProductList from "./components/products/ProductList";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProductsPageProps {
  products: Product[];
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return { props: { products } };
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return <ProductList products={products} />;
}
