import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | Triple Point",
  description:
    "Explore Triple Point products including interactive displays, conferencing kits, queue devices, security equipment, and infrastructure components.",
  alternates: { canonical: "https://triplepointsa.com/products" },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
