import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function ContactSection() {
  return (
    <section>
      <div className="bg-[#07111F] py-10 sm:20 px-6 sm:px-12">
        <MaxWidthWrapper>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-3xl text-white mb-4">
              GET IN TOUCH
            </h2>
            <p className="text-gray-300 text-[16px] sm:text-[13px] lg:[9px] leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help transform
              your business
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-[#F4F5F9] px-4 sm:px-10 lg:px-20 py-12 text-[#1A1A1A]">
        <MaxWidthWrapper>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Left Contact Form */}
            <div id="contact" className="bg-white rounded-2xl shadow-md p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl sm:text-[10px] md:text-[20px] 2xl:text-[22px] font-semibold mb-6">
                Contact US
              </h2>

              <form className="flex flex-col gap-3 md:gap-4 xl:gap-9">
                {/* Name */}
                <div>
                  <label className="text-[10px] sm:text-[8px] md:text-[12px] 2xl:text-[15px] mb-1 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border placeholder:text-[10px] sm:placeholder:text-[8px] md:placeholder:text-[12px] 2xl:placeholder:text-[15px] border-[#E5E5EA] rounded-md px-3 py-1 sm:py-0 lg:py-1 bg-[#CCCCCC] focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] sm:text-[8px] md:text-[12px] 2xl:text-[15px] mb-1 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full border placeholder:text-[10px] sm:placeholder:text-[8px] md:placeholder:text-[12px] 2xl:placeholder:text-[15px] border-[#E5E5EA] rounded-md px-3 py-1 sm:py-0 lg:py-1 bg-[#CCCCCC] focus:outline-none"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="text-[10px] sm:text-[8px] md:text-[12px] 2xl:text-[15px] mb-1 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="w-full border placeholder:text-[10px] sm:placeholder:text-[8px] md:placeholder:text-[12px] 2xl:placeholder:text-[15px] border-[#E5E5EA] rounded-md px-3 py-1 sm:py-0 lg:py-1 bg-[#CCCCCC] focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] sm:text-[8px] md:text-[12px] 2xl:text-[15px] block">
                    Message
                  </label>
                  <textarea
                    placeholder="Type Here_ _"
                    className="w-full border placeholder:text-[10px] sm:placeholder:text-[8px] md:placeholder:text-[12px] 2xl:placeholder:text-[15px] border-[#E5E5EA] rounded-md px-3 py-1 sm:py-0 lg:py-1 bg-[#CCCCCC] focus:outline-none"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-[15px] 2xl:text-[20px] w-full border border-[#0086FF] text-[#0086FF] rounded-full py-2 sm:py-1 font-medium hover:bg-[#2A66F8] hover:text-white transition"
                >
                  Send Now
                </button>
              </form>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-3">
              {/* Description */}
              <p className=" md:text-[11px] text-[#333333] sm:text-[9px] lg:text-[14px] xl:text-[18px] 2xl:text-[25px] sm:pl-4 md:pl-8 lg:pl-12 xl:pl-21 2xl:pl-25">
                At ISCE, we believe that technology should empower, inspire, and
                transform. We're not just building products; we're crafting
                experiences that bridge the gap between innovation and impact.
              </p>

              {/* Contact Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="flex text-start sm:text-[8px] md:text-[8px] sm:flex-col sm:items-center gap-5">
                  <div className="sm:hidden w-9 h-9 justify-center bg-white shadow-md relative rounded-full flex items-center">
                    <img
                      src="/images/call.svg"
                      className="absolute sm:static w-5 h-5"
                    />
                  </div>
                  <img
                    src="/images/call.svg"
                    className="hidden sm:block w-5 h-5 sm:h-6 sm:w-6 md:w-6 md:h-6"
                  />

                  <div>
                    <p className="sm:text-[12px] md:text-[12px] text-[#333333] font-medium">
                      Phone Number
                    </p>
                    <p className="text-[#8C8C8C] text-center">############</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex text-start sm:flex-col sm:items-center gap-5">
                  <div className="sm:hidden w-9 h-9 justify-center bg-white shadow-md relative rounded-full flex items-center">
                    <img
                      src="/images/mail.svg"
                      className="absolute sm:static w-5 h-5"
                    />
                  </div>
                  <img
                    src="/images/mail.svg"
                    className="hidden sm:block w-5 h-5 sm:h-6 sm:w-6 md:w-6 md:h-6"
                  />
                  <div>
                    <p className="sm:text-[12px] md:text-[12px] text-[#333333] font-medium">
                      Email Address
                    </p>
                    <p className="text-center sm:text-[8px] md:text-[8px] text-[#8C8C8C]">
                      ############
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex text-start sm:flex-col sm:items-center gap-5">
                  <div className="sm:hidden w-9 h-9 justify-center bg-white shadow-md relative rounded-full flex items-center">
                    <img
                      src="/images/whatsapp.svg"
                      className="absolute sm:static w-5 h-5"
                    />
                  </div>
                  <img
                    src="/images/whatsapp.svg"
                    className="hidden sm:block w-5 h-5 sm:h-6 sm:w-6 md:w-6 md:h-6"
                  />
                  <div>
                    <p className="font-medium sm:text-[12px] md:text-[12px]">
                      Whatsapp
                    </p>
                    <p className="text-[#8C8C8C] sm:text-[8px] md:text-[8px] text-center">
                      ############
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex text-start sm:flex-col sm:items-center gap-5">
                  <div className="sm:hidden w-9 h-9 justify-center bg-white shadow-md relative rounded-full flex items-center">
                    <img
                      src="/images/where.svg"
                      className="absolute sm:static w-5 h-5"
                    />
                  </div>
                  <img
                    src="/images/where.svg"
                    className="hidden sm:block w-5 h-5 sm:h-6 sm:w-6 md:w-6 md:h-6"
                  />
                  <div>
                    <p className="font-medium text-[#333333] sm:text-[12px] md:text-[12px]">
                      Our Office
                    </p>
                    <p className="sm:text-[8px] md:text-[8px] text-center text-[#8C8C8C]">
                      ############
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full">
                <Image
                  src="/images/Map.jpg"
                  width={900}
                  height={600}
                  alt="map"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
