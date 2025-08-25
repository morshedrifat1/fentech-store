"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="mb-10">
      <h1 className="text-center text-4xl font-bold">Latest Porducts</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 mt-5">
      {products.slice(0, 4).map((product) => (
        <article
          key={product.id}
          className="relative bg-background rounded-lg overflow-hidden group shadow"
        >
          <Link
            href={`/productDetails/${product._id}`}
            className="absolute inset-0 z-10"
            prefetch={false}
          >
            <span className="sr-only">View {product.name}</span>
          </Link>

          <img
            src={product.productImg}
            width={400}
            height={300}
            className="w-full h-60 object-cover"
          />

          <div className="p-4">
            <h3 className="text-lg font-semibold">
              {" "}
              {product.productName?.split(" ").slice(0, 4).join(" ") || ""} ...
            </h3>
            <p className="text-sm text-muted-foreground">
              {product.productDescription}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-base font-semibold">
                ${product.productPrice}
              </span>
              <Button><Link
                href={`/productDetails/${product._id}`}
              >
                Details
              </Link></Button>
            </div>
          </div>
        </article>
      ))}
    </section>
    </div>
  );
}
