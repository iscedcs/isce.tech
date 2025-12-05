import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  title: string;
  desc: string;
  price: number;
  rating: number;
  image: string;
  trending?: boolean;
}

export default function ProductCard({
  id,
  title,
  desc,
  price,
  rating,
  image,
  trending,
}: ProductCardProps) {
    console.log("CARD ID:", id);

  return (
    {products.map((item, idx) => (
      <article 
      key={idx}
      className="w-full max-w-sm rounded-2xl overflow-hidden bg-[#1A1D1F] shadow-sm border border-[#2A2D31]">
      
      <div className="relative w-full h-52 bg-gray-400 flex items-center justify-center">
        {image && (
          <img src={image} alt={title} className="object-cover" />
        )}

        {trending && (
          <span className="absolute top-3 left-3 bg-[#EAF3FF] text-[#4C7EFF] text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <span>📈</span> Trending
          </span>
        )}
      </div>

      <div className="px-5 py-5 text-white">

        <h3 className="font-semibold text-[15px]">{item.title}</h3>

        <p className="text-sm text-gray-400 mt-1">
          {item.desc}
        </p>

        <div className="flex items-center gap-1 mt-3">
          <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          <span className="text-gray-400 text-sm">({item.rating})</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-[#3EB0FF] font-bold text-lg">${item.price}</p>

          <Link href={`/store/${id}`}>
            <button className="bg-[#8A2BE2] hover:bg-[#7425c7] transition text-white px-5 py-2 rounded-lg text-sm flex items-center gap-2">
              <span>➕</span> Add
            </button>
          </Link>

        </div>
      </div>
    </article>
    )}
    
  );
}
