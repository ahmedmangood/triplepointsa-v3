import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailsClient from "./ProductDetailsClient";
import { getProductBySlug, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Triple Point",
    };
  }

  return {
    title: `${product.titleEn} | Triple Point`,
    description: product.shortEn,
    alternates: { canonical: `https://triplepointsa.com/products/${product.slug}` },
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}
