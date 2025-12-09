import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function StoreSection() {
  return (
    <section className="bg-[#FFFFFF] py-[4%]">
      <MaxWidthWrapper>
      <div className="px-[4%]">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-wide text-black mb-10">
          STORE
        </h2>

        {/* Store Container */}
        <div className="relative w-full bg-black  h-[220px] sm:h-[260px] md:h-[340px] lg:h-[420px] overflow-hidden transition-all duration-300">
          {/* "See more" Button */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
            
            <button
              className="bg-[#1A1A1A] border border-[#D9D9D9] text-white text-[10px] sm:text-xs md:text-sm px-3 sm:px-4 py-2 rounded-md hover:bg-[#2A2A2A] transition"
            >
              See more
            </button>
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </section>
  );
}
