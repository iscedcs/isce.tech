import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StoreSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[4%]">
      <div className="max-w-8xl mx-auto px-[4%]">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-wide text-black mb-10">
          STORE
        </h2>

        {/* Store Container */}
        <div className="relative w-full bg-black  h-[220px] sm:h-[260px] md:h-[340px] lg:h-[420px] overflow-hidden transition-all duration-300">
          {/* "See more" Button */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
            
            <Link href="/store/register"
              className="bg-[#1A1A1A] border border-[#D9D9D9] text-white text-[10px] sm:text-xs md:text-sm px-3 sm:px-4 py-2 rounded-md hover:bg-[#2A2A2A] transition"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
