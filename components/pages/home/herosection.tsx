import React from "react";
import Image from "next/image";
import OrbitAnimation from "@/components/orbitanimation";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function HeroSection() {
  return (
    <section
    className=" hero-grid w-full bg-[#020d1d]  text-white py-3
    overflow-hidden relative pb-10"
    >
      <MaxWidthWrapper>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1d1d1d_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      <div className="grid items-center relative sm:grid-cols-2 gap-14 ">
        {/* LEFT SIDE — ALWAYS VISIBLE */}
        <div className="z-20">
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:py-1 sm:px-2 md:px-3 border border-[#404040] rounded-full text-[12px] sm:text-[9px] md:text-[12px] mb-4">
            <span className="flex items-center justify-center w-2 h-2 ">
              <img src="/images/Vector.svg" />
            </span>
            Digital Innovation Ecosystem
          </div>

          <h1 className="font-bold leading-tight text-[50px] sm:text-[25px] md:text-[30px] ">
            Creating the <span className="text-[#0086FF]">Future,</span>
            <br />
            Not Waiting For It.
          </h1>

          <p className="text-[#8C8C8C] mt-5 max-w-md leading-relaxed text-[19px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[18px]">
            Redefining luxury with tech to live smart and share seamlessly. We
            build digital solutions that transform businesses and elevate
            experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex-wrap gap-5 sm:flex sm:flex-row">
            <button className="mt-6 bg-gradient-to-r from-[#0086FF] to-[#B0D9FF]  rounded flex items-center gap-1 px-2 h-10 md:px-3 sm:h-6 md:h-8 sm:text-[8px] md:text-[10px] lg:text-[12px]">
              Free Consultation <span>›</span>
            </button>

            <button className="mt-6 bg-gradient-to-r from-[#0086FF] to-[#B0D9FF]  rounded text-sm flex items-center gap-2 px-2  md:px-3 h-10 sm:h-6 md:h-8 sm:text-[8px] md:text-[10px] lg:text-[12px]">
              <img
                src="/images/store.svg"
                className="h-3 w-3 sm:h-2 sm:w-2 md:h-3 md:w-3"
              />{" "}
              Visit Store
            </button>
          </div>
          <div className="hidden sm:flex flex-wrap gap-5 sm:mt-6 md:mt-10 text-gray-300 sm:text-[8px] md:text-[10px] lg:text-[12px]">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>{" "}
              Contactless Solutions
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>{" "}
              Innovative Tech Solutions
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — HIDDEN ON MOBILE EXACTLY LIKE YOUR SCREENSHOT */}
        <div className="relative hidden sm:flex  justify-center items-center pt-10">
          <img
            src="/images/orbitanimation.svg"
            width="100px"
            height="100px"
            className="absolute w-800 h-400 -mr-20 -mb-80 z-20 md:-mr-45 md:-mb-95 lg:-mr-70 lg:-mb-120  xl:-mr-80 xl:-mb-140"
          />
          <div className="absolute sm:w-20 sm:h-20 md:w-40 md:h-40 lg:w-70 lg:h-70 rounded-full glow-orb blur-2xl"></div>

          {/* GLOW RING */}
          <div className="sm:w-43 sm:h-43 md:w-45 md:h-45 lg:w-70 lg:h-70 rounded-full overflow-hidden relative z-10  shadow-[0_0_40px_10px_rgba(0,120,255,0.4)]">
            <img
              src="/images/hero.jpg"
              alt="Hero Person"
              className="rounded-full relative"
              height="450px"
              width="450px"
            />
          </div>

          {/* FLOATING ICONS */}
          {/* FLOATING ICONS — RESPONSIVE */}
          <img
            src="/images/rocket.svg"
            className="
    absolute 
    top-[15%] sm:left-[1%] md:left-[2%]
    sm:w-10 md:w-14 lg:w-16
  "
          />

          <img
            src="/images/bolt.svg"
            className="
    absolute
    top-[20%] md:top-[30%] right-[1%] md:right-1
    sm:w-10 md:w-14 lg:
  "
          />

          <img
            src="/images/target.svg"
            className="
    absolute
    bottom-[3%] left-[5%] md:left-[2%]
    w-10 md:w-14 lg:w-16
  "
          />

          <img
            src="/images/diamond.svg"
            className="
    absolute
    bottom-[10%] right-[1%]
    w-10 md:w-14 lg:w-16
  "
          />
        </div>
      </div>

      {/* MOBILE CENTER GLOW */}
      <div className="sm:hidden absolute left-1/2 top-1/6 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-600/30 blur-2xl"></div>
    </MaxWidthWrapper>
    </section>
  );
}
