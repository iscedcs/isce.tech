import React from "react";
import ProductCard from "./card";
import { products } from "@/lib/const";
import Link from "next/link";



export default function StorePageCom() {
  const words = ["All", "NFC", "WEARABLE", "SMART DEVICE", "ACCESSORIES"];

  return (
    <section>
      <div className="max-w-7xl mx-auto w-full bg-gradient-to-r from-[#231457] to-[#333eda] via-[#7727c7] py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-white mb-4">
            SMART TECH FOR SMART LIVING
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Discover cutting-edge gadgets and NFC product that enhance your
            connect lifestyle
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-between items-center py-4 px-15 bg-white border border-b-gray-200">
        <div className="relative w-full max-w-md">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-4.35-4.35m1.94-5.4a7.34 7.34 0 11-14.69 0 7.34 7.34 0 0114.69 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            className="items-center w-full placeholder-[8C8C8C] placeholder:pl-7 mx-auto block border bg-[#E5E5EA] border-gray-300 rounded-md px-4 py-2 focus:outline-none "
          />
        </div>
        <div className="flex gap-3">
        {words.map((word, index) => (
          <div
            key={index}
            className="px-3 py-1 rounded-full text-[12px] bg-[#FFFFFF] border border-[#CCCCCC] text-[#8C8C8C] hover:bg-gradient-to-r from-[#231457] to-[#333eda] via-[#7727c7] hover:text-white widespread-nospace"
          >
            {word}
          </div>
        ))}
      </div>
        </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, idx) => (
      <article 
      key={idx}
      className="w-full max-w-sm rounded-2xl overflow-hidden bg-[#1A1D1F] shadow-sm border border-[#2A2D31]">
      
      <div className="relative w-full h-52 bg-gray-400 flex items-center justify-center">
        {item.image && (
          <img src={item.image} alt={item.title} className="object-cover" />
        )}

        {item.trending && (
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

          <Link href={`/store/${item.id}`}>
            <button className="bg-[#8A2BE2] hover:bg-[#7425c7] transition text-white px-5 py-2 rounded-lg text-sm flex items-center gap-2">
              <span>➕</span> Add
            </button>
          </Link>

        </div>
      </div>
    </article>
    ))}
      </div>
      </div>
    </section>
  );
}
