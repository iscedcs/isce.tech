"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { allServices } from "@/lib/const";
import ReactMarkdown from "react-markdown";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function ServicesSection() {
  return (
    <section>
      <div className="bg-[#07111F] py-24 px-6 md:px-12">
        <MaxWidthWrapper>
          <div className="text-center text-[#D9D9D9]">
            <h2 className="text-4xl md:text-5xl  mb-4 font-semibold">
              ISCE <span className=" font-normal">Services</span>
            </h2>

            <p className=" text-[19px] md:text-base leading-relaxed max-w-2xl mx-auto">
              Local expertise with a global mindset to serve clients worldwide
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full bg-[#F2F2F7]">
        <MaxWidthWrapper>
          {allServices.map((service, index) => {
            const isReversed = index % 2 === 1; // alternate layout

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex flex-col sm:flex-row ${
                  !isReversed ? "sm:flex-row-reverse" : ""
                } sm:items-center gap-10 lg:gap-23 px-12  py-10 mx-auto`}
              >
                {/* IMAGE — always first on mobile */}
                <div className="flex justify-center md:w-1/2 ">
                  <div className="rounded-2xl mx-[-20] sm:mx-[-10] lg:mx-[-30px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={700}
                      height={700}
                      className="rounded-2xl object-cover z-0"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div className="md:w-1/2 ">
                  <div className="bg-white p-5 shadow-md rounded-sm z-10 mt-[-110] sm:mt-[-30] md:mt-[-28] lg:mt-[-100] sm:max-w-none sm:mx-[-10] sm:p-0 sm:bg-transparent sm:justify-center sm:shadow-none lg:mx-[-30px]">
                    {/* ICON */}
                    <div className="xl:w-15 xl:h-15 lg:w-10 lg:h-10 sm:w-5 sm:h-5 rounded-xl flex items-center mb-2">
                      <img
                        src="/images/circle.svg"
                        alt="Service Icon"
                        className="hidden sm:block"
                      />
                    </div>

                    {/* TITLE */}
                    <h2 className="text-[22px] sm:text-[11px] md:text-[16px] lg:text-[20px] font-semibold text-[#000000] mb-2 xl:text-[30px]">
                      {service.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-[15px] text-[rgb(0,0,0)] leading-relaxed mb-2 sm:text-[7px] md:text-[11px] lg:text-[14px] [@media(min-width:1042px)_and_(max-width:1100px)]:text-[15px] xl:text-[18px]">
                      {service.description}
                    </p>

                    {/* FEATURES */}
                    <ul className="space-y-2 mb-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[#404040]  text-[11px] sm:text-[6px] md:text-[8px] lg:text-[12px] xl:text-[14px]"
                        >
                          <img
                            src="/images/check.svg"
                            alt="check icon"
                            className="w-3 h-3 sm:w-2 sm:h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* TECHNOLOGIES */}
                    <div>
                      <h3 className="text-[13px] sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[17px] font-medium text-[#404040] mb-2">
                        TECHNOLOGIES WE USE
                      </h3>

                      <div className="flex flex-wrap gap-3 sm:gap-2">
                        {service.technologies_we_use.map((tech, i) => (
                          <span
                            key={i}
                            className=" px-2 md:px-3 py-1 xl:px-4 xl:py-2 rounded-full text-[11px] sm:text-[6px] md:text-[8px] lg:text-[10px] xl:text-[13px] bg-[#E6F3FF] border border-[#0086FF] text-[#000000]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
