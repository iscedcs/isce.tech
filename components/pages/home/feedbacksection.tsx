import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { testimonials } from "@/lib/const";
import SmoothScroll from "./scroll";
import SmoothLogoScroll from "./logoscroll";

export default function Feedback() {
  return (
    <section className="bg-[#EBE8E1] py-8 text-[#1A1A1A]">
      <MaxWidthWrapper>
        <div className="">
          {/* TITLE */}
          <div className="px-4 md:px-20 text-center">
            <div className="flex items-center justify-center gap-2 text-xs tracking-wide text-black">
              <img src="/images/arrow.svg" alt="arrow" />
              CUSTOMER FEEDBACK
            </div>

            <h2 className="text-lg md:text-xl font-semibold mt-2">
              80+ Customer <span className="font-normal">Choose Us</span>
            </h2>
          </div>

          {/* FEEDBACK CARDS AUTO SCROLL CAROUSEL*/}

          <SmoothScroll
            testimonials={testimonials}
            speed={250} // Adjust speed (pixels per second)
          />

          {/* COMPANY LOGO STRIP AUTO-SCROLL LOGO STRIP */}

          <div>
            {/* Your content */}
            <SmoothLogoScroll />
          </div>

        </div>
      </MaxWidthWrapper>
    </section>
  );
}
