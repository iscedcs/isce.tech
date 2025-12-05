"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/const"; // re-use your product list
import Link from "next/link";

interface ProductDetailsProps {
  id: number;
}

export default function ProductDetailsPage({ id }: ProductDetailsProps) {
  const product = products.find((p) => p.id === id);
  const [qty, setQty] = useState(1);

  if (!product) {
    return <div className="p-10">Product not found.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#F5F6FA] px-6 md:px-16 py-10">
      {/* Back Link */}
      <Link href="/store" className="flex items-center gap-2 text-gray-600 mb-6">
        <span className="text-xl">←</span> Back to Store
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left - Product Image */}
        <div className="flex justify-center">
          <div className="w-[350px] h-[350px] md:w-[420px] md:h-[420px] bg-gray-400 rounded-2xl" />
        </div>

        {/* Right - Product Details */}
        <div>
          {/* Badge */}
          <span className="bg-[#EDE3FF] text-[#7A33FF] px-4 py-1 rounded-full text-sm font-semibold">
            NFC
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mt-4">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-400 text-lg">⭐ ⭐ ⭐ ⭐ ⭐</span>
            <span className="text-gray-500 text-sm">({product.rating} Stars)</span>
          </div>

          {/* Price */}
          <p className="text-[#0071E3] font-bold text-3xl mt-4">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            Premium NFC business card with instant contact sharing. Tap to
            share your digital profile, social media, and portfolio.
          </p>

          {/* Benefits Box */}
          <div className="bg-white shadow-sm rounded-xl p-6 mt-6">
            <h3 className="font-semibold mb-3">Key Benefits</h3>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                ✔ Stylish Design
              </li>
              <li className="flex items-center gap-2">
                ✔ Wireless Payment
              </li>
              <li className="flex items-center gap-2">
                ✔ Contactless Access
              </li>
            </ul>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="font-medium mb-2">Quantity:</p>

            <div className="flex items-center gap-3">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700"
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              >
                -
              </button>

              <div className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900">
                {qty}
              </div>

              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Buy Button */}
          <button className="w-full bg-[#0B63CE] hover:bg-[#084ea8] text-white font-medium py-3 rounded-full text-lg mt-8">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
