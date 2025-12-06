import { testimonials } from "@/lib/const";

export default function Feedback() {
  return (
    <section className="w-full bg-[#EBE8E1] py-8 text-[#1A1A1A] overflow-hidden
    ">
      <div className="mx-auto max-w-7xl">
        {/* TITLE */}
        <div className="px-4 md:px-20 text-center">
          <div className="flex items-center justify-center gap-2 text-sm tracking-wide text-black">
            <img src="/images/arrow.svg" alt="arrow" />
            CUSTOMER FEEDBACK
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            80+ Customer <span className="font-normal">Choose Us</span>
          </h2>
        </div>

        {/* FEEDBACK CARDS AUTO SCROLL CAROUSEL*/}

        <div className="mt-10 overflow-hidden">
          <div className="flex gap-6 animate-scroll px-10">
            {testimonials.concat(testimonials).map((item, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-r from-[#0E1622] to-[#0B111A] 
                   border border-[#1F2937] rounded-xl pb-10 shadow-sm
                   min-w-[360px]"
              >
                {/* Avatar + Review */}
                <div className="flex items-start gap-4 p-3 py-5">
                  <div className="w-20 h-20 bg-[#8C8C8C] rounded-full shrink-0"></div>

                  <p className="text-[#D9D9D9] text-[11px] leading-relaxed">
                    “{item.review}”
                  </p>
                </div>

                <div className="absolute left-0 h-px w-80 mx-6 bg-[#D9D9D9] top-[130px]"></div>


                {/* Name + Role + Rating */}
                <div className="flex justify-between absolute left-6 top-[140px] items-center text-[12px] pl-3 text-white">
                  <p>
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-[#8C8C8C]"> / {item.role}</span>
                  </p>

                  <div className="flex gap-1 pr-1 absolute -right-30">
                    {Array(item.rating)
                      .fill(0)
                      .map((_, index) => (
                        <span
                          key={index}
                          className="text-[#325239] text-[12px]"
                        >
                          ★
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPANY LOGO STRIP AUTO-SCROLL LOGO STRIP */}

        <div className="relative overflow-hidden mt-14 opacity-90">
          <div className="flex items-center gap-20 animate-scroll whitespace-nowrap px-[2%]">
            {[
              "/images/fidelity-bank-nigeria-seeklogo.svg",
              "/images/airs 1.svg",
              "/images/netplus 1.svg",
              "/images/ariaria 1.svg",
              "/images/mi+ 1.svg",
              "/images/anambra 1.svg",
            ]
              .concat([
                "/images/fidelity-bank-nigeria-seeklogo.svg",
                "/images/airs 1.svg",
                "/images/netplus 1.svg",
                "/images/ariaria 1.svg",
                "/images/mi+ 1.svg",
                "/images/anambra 1.svg",
              ])
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Company Logo"
                  className="h-20 w-20 object-contain shrink-0"
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
