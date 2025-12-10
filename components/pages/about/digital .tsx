import React from "react";
import { statsData } from "@/lib/const";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function Digital() {
  return (
    <section className="bg-gradient-to-r from-[#0E1622] to-[#0B111A] text-white">

          {/* Top Section */}
          <div className="flex flex-col sm:flex-row items-stretch bg-gradient-to-r from-[#0E1622] to-[#0B111A]">
            {/* IMAGE LEFT (mobile goes bottom) */}
            <div className="w-full sm:w-3/4 order-2 sm:order-1 h-full">
              <img
                src="/images/team.jpg"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left w-full sm:w-1/2 order-1 sm:order-2 sm:mt-0 px-5 sm:px-10 py-5  sm:py-1 md:py-0 lg:px-15">
              <h2 className="text-[30px] sm:text-[20px] md:text-[23px] lg:text-[30px] xl:text-[45px] font-bold">
                Path to Digital
              </h2>
              <p className="text-[30px] sm:text-[20px] md:text-[23px] lg:text-[30px] xl:text-[45px]">
                Excellence
              </p>

              <p className="text-gray-300 mt-1 text-[14px] sm:text-[7px] md:text-[9px] lg:text-[12px] xl:text-[16px] text-center sm:text-left">
                At ISCE, we believe that technology should empower, inspire, and
                transform. We're not just building products; we're crafting
                experiences that bridge the gap between innovation and impact.
              </p>

              {/* STATS */}
              <div className=" mt-2  grid grid-cols-2 grid-rows-2 gap-4 sm:gap-2 items-center">
                {statsData.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center sm:items-start sm:justify-start"
                  >
                    {/* Circle */}
                    <div className="relative sm:text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px] border-[1px] border-white w-20 h-20 sm:w-8 sm:h-8 md:w-11 md:h-11 lg:h-15 lg:w-15 xl:w-19 xl:h-19 max-[250px]:w-15 max-[250px]:h-15 rounded-full flex justify-center items-center font-bold text-xl max-[250px]:text-sm">
                      <img
                        src="/images/Ellipse 25.svg"
                        className="absolute  w-17 h-17 sm:w-6 sm:h-6 md:h-9 md:w-9 lg:h-12 lg:w-12 xl:h-16 xl:w-16 max-[250px]:w-12 max-[250px]:h-12"
                      />
                      {item.value}
                    </div>

                    {/* Label */}
                    <p
                      className="text-sm  sm:text-[7px] md:text-[9px] md:text-[11
                'px] lg:text-[13px] text-white mt-2 text-center sm:text-left"
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>


    </section>
  );
}
