import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function LuxurySection() {
  return (
    <section className="bg-[#05080f] text-white py-20 px-[8%] overflow-hidden">
      <MaxWidthWrapper>
      <div className="text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-1 rounded-full border-2 border-[#404040] text-xs lg:text-[15px] mb-6">
          <h1 className="bg-gradient-to-r from-[#231942] to-[#7F3FBF] via-[#3842D1] bg-clip-text text-transparent">
            THE FUTURE IS NOW
          </h1>
        </div>
        {/* Heading */}
        <h2 className="text-5xl font-semibold leading-tight text-[#8C8C8C]">
          Redefining Luxury
          <br />
          <span className="text-[#0086FF] text-[50px] font-semibold">with Tech</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[#FFFFFF] text-[30px]">
          Live Smart. Share Seamlessly.
        </p>

        {/* Paragraph */}
        <p className="max-w-2xl mx-auto mt-6 text-[#8C8C8C] text-[22px] text-center sm:text-[14px] md:text-[17px] leading-relaxed ">
          Enter a contactless world where technology enhances every interaction. From NFC-<br/> powered experiences to smart automation, we're building the infrastructure for<br/> tomorrow’s connected lifestyle.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-[5%] mt-[8%]">
          {/* Card 1 */}
          <div className="bg-[#161B35] text-left p-3 sm:p-4 lg:p-5 rounded-xl border border-[#2D3248] min-w-0">
            <img
              src="/images/living.svg"
              alt="Smart Living Icon"
              className="w-10 h-10 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-15 2xl:h-15 mb-4"
            />
            <h4 className="font-semibold text-lg sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] mb-2">Smart Living</h4>
            <p className="text-gray-400 text-[14px] sm:text-[6px] md:text-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[20px]">
              Transform your lifestyle with intelligent automation and connected devices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#161B35] text-left p-3 sm:p-4 lg:p-5 rounded-xl border border-[#2D3248] min-w-0">
            <img
              src="/images/tech.svg"
              alt="Contactless Tech Icon"
              className="w-10 h-10 sm:w-5 sm:h-5 mb-4 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:h-15"
            />
            <h4 className="font-semibold text-lg sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] mb-2">Contactless Tech</h4>
            <p className="text-gray-400 text-[14px] sm:text-[6px] md:text-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[20px]">
              Seamless NFC and wireless solutions for modern convenience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#161B35] text-left p-3 sm:p-4 lg:p-5 rounded-xl border border-[#2D3248] min-w-0">

            <img
              src="/images/payment.svg"
              alt="Digital Payments Icon"
              className="w-10 h-10 sm:w-5 sm:h-5 mb-4 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:h-15"
            />
            <h4 className="font-semibold text-lg sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] mb-2">Digital Payments</h4>
            <p className="text-gray-400 text-[14px] sm:text-[6px] md:text-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[20px]">
              Secure, instant transactions for the cashless economy.
            </p>
          </div>
        </div>

        {/* Contact-less World Title */}
        <h3 className="mt-25 sm:mt-[10%] md:mt-[5%] text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#404040] text-center">
          The Contact-less World
        </h3>

        {/* Video / Image Section */}
        <div className="flex justify-center">
          <div className="mt-8 relative w-full overflow-hidden 2xl:px-160 xl:px-135 lg:px-105 md:px-[49%] sm:px-[50%] rounded-lg border border-[#404040] items-center justify-center flex h-45 sm:h-64 md:h-80 lg:h-96 xl:h-105 sm:rounded-xl md:rounded-2xl">
            <h3 className="text-[#404040]  xl:text-3xl lg:text-2xl md:text-[23px]  sm:text-[18px] whitespace-nowrap items-center justify-center text-xs font-semibold text-center px-3 sm:px-4 md:px-6">
              The Future is Here, Now....
            </h3>
            <img
              src="/images/hand.png"
              alt="Contactless Preview"
              className="absolute inset-0 w-full h-full not-first flex object-cover sm:px-[19%] max-[306px]:px-[10%] min-[400px]:px-[25%] max-[639px]:px-[25%]"
            />

            {/* Play Button */}
            <button className="cursor-pointer absolute inset-0 flex items-center justify-center">
              <img
                src="/images/play.png"
                alt="Play Button"
                className="w-10 sm:w-14 md:w-17 lg:w-24 h-10 sm:h-14 md:h-17 lg:h-24"
              />
            </button>
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </section>
  );
}
