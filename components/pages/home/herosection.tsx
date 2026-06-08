import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { LeftIcon } from "@/lib/icons";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-grid bg-[#020d1d] text-white overflow-hidden relative py-16 md:py-24 lg:py-32">
      <MaxWidthWrapper>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1d1d1d_1px,transparent_1px)] bg-size-[30px_30px]"></div>
        <div className="grid items-center relative sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16 min-h-[600px] md:min-h-[700px]">
          {/* LEFT SIDE — ALWAYS VISIBLE */}
          <div className="z-20">
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:py-1 sm:px-2 md:px-3 border border-[#404040] rounded-full text-[12px] sm:text-[9px] md:text-[12px] mb-4">
              <span className="flex items-center justify-center w-2 h-2 ">
                <img src="/images/Vector.svg" />
              </span>
              Digital Innovation Ecosystem
            </div>

            <h1 className="font-bold leading-tight text-[50px] sm:text-[28px] md:text-[40px] lg:text-[48px] xl:text-[56px]">
              Creating the <span className="text-[#0086FF]">Future,</span>
              <br />
              Not Waiting For It.
            </h1>

            <p className="text-[#8C8C8C] mt-5 max-w-md leading-relaxed text-[19px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
              {` Redefining luxury with tech to live smart and share seamlessly. We
            build digital solutions that transform businesses and elevate
            experiences.`}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3 md:gap-4 mt-8 md:mt-10">
              {/* <button className="cursor-pointer bg-linear-to-r from-[#0086FF] to-[#B0D9FF] rounded-lg flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 text-white font-medium text-sm md:text-base hover:shadow-lg hover:shadow-[#0086FF]/50 transition-all duration-300">
                Free Consultation <LeftIcon className="w-3 h-3 md:w-4 md:h-4" />
              </button> */}

              <button className="cursor-pointer bg-linear-to-r from-[#0086FF] to-[#B0D9FF] rounded-lg text-white font-medium flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base hover:shadow-lg hover:shadow-[#0086FF]/50 transition-all duration-300">
                <img
                  src="/images/store.svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                />{" "}
                <Link href="https://store.isce.tech">Visit Store</Link>
              </button>
            </div>
            <div className="hidden sm:flex flex-wrap gap-6 md:gap-8 sm:mt-10 md:mt-12 text-gray-300 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#0086FF] flex shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>{" "}
                <span>Contactless Solutions</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#0086FF] flex shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>{" "}
                <span>Innovative Tech Solutions</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — HIDDEN ON MOBILE EXACTLY LIKE YOUR SCREENSHOT */}
          <div className="relative hidden sm:flex justify-center items-center">
            <img
              src="/images/orbitanimation.svg"
              width="100px"
              height="100px"
              className="absolute w-[600px] h-[400px] md:w-[700px] md:h-[450px] lg:w-[800px] lg:h-[500px] -right-40 -bottom-32 md:-right-48 md:-bottom-40 lg:-right-56 lg:-bottom-48 z-20"
            />
            <div className="absolute md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full glow-orb blur-3xl bg-blue-500/20"></div>

            {/* GLOW RING */}
            <div className="sm:w-48 md:w-64 lg:w-80 aspect-square rounded-full overflow-hidden relative z-10 shadow-[0_0_40px_20px_rgba(0,134,255,0.3)] ring-1 ring-[#0086FF]/20">
              <img
                src="/images/hero.jpg"
                alt="Hero Person"
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            {/* FLOATING ICONS */}
            <img
              src="/images/rocket.svg"
              className="animate-float absolute top-[10%] left-0 sm:w-12 md:w-16 lg:w-20"
            />

            <img
              src="/images/bolt.svg"
              className="animate-float absolute top-[25%] right-0 sm:w-12 md:w-16 lg:w-20"
            />

            <img
              src="/images/target.svg"
              className="animate-float absolute bottom-[5%] left-[5%] sm:w-12 md:w-16 lg:w-20"
            />

            <img
              src="/images/diamond.svg"
              className="animate-float absolute bottom-[15%] right-0 sm:w-12 md:w-16 lg:w-20"
            />
          </div>
        </div>

        {/* MOBILE CENTER GLOW */}
        <div className="sm:hidden absolute left-1/2 top-1/3 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl -z-10"></div>
      </MaxWidthWrapper>
    </section>
  );
}
