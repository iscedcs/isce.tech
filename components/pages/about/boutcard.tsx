import React from "react";
import { aboutCards } from "@/lib/const";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function BoutCard() {
  return (
    <section>
      {" "}
      {/* Bottom Cards */}
      <div className="w-full bg-[#F2F2F7] text-black py-5 px-10 xl:px-15">
        <MaxWidthWrapper>
          <div className="px-4 grid sm:grid-cols-3 gap-6">
            {/* Mission */}

            {aboutCards.map((card) => (
              <div
                key={card.id}
                className="bg-white md:gap-4 shadow-md rounded-sm p-3 md:p-4 border border-[#0086FF]"
              >
                <div className="mb-2 lg:mb-4 flex flex-col gap-2 space-x-3">
                  <img
                    src={card.icon}
                    className="w-10 h-10 sm:w-5 sm:h-5 md:h-7 md:w-7 lg:h-10 lg:w-10 xl:h-13 xl:w-13"
                  />
                  <h3 className="font-bold text-lg sm:text-[10px] md:text-[12px] lg:text-[18px] xl:text-[22px]">
                    {card.title}
                  </h3>
                </div>

                <p className="text-[12px] sm:text-[6px] md:text-[7px] lg:text-[10px] xl:text-[14px] opacity-70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
