import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import MaxWidthWrapper from "../max-width-wrapper";
import Link from "next/link";
export default function FooterComponent() {
  return (
    <footer className="bg-[#000000] text-white w-full">
      <MaxWidthWrapper>
      {/* Top Section */}
      <div className="relative">
        <div className="justify-between">
          <div className="text-center py-16">
            <h2 className="text-[35px] font-light">
              Be Part of Something{" "}
              <span className="font-semibold">Exclusive</span>
            </h2>
            <p className="mt-3 text-[13px] text-gray-300">
              Join the Ecosystem of the Future and Live the Future, Now.
            </p>
            <button className="mt-6 px-6 py-2 cursor-pointer bg-gradient-to-r from-[#0086FF] to-[#B0D9FF] rounded text-sm flex items-center gap-2 mx-auto">
              Free Consultation <span>›</span>
            </button>
          </div>
        </div>

        <div className="bg-[#1B1E23] mx-5 sm:px-10">
          {/* Newsletter Section */}
          <div className="text-xl sm:text-sm  py-[2%] sm:py-[7%] border-b border-[#404040] sm:flex sm:items-center sm:justify-between gap-[12%]">
            {/* LEFT TEXT */}
            <div className="my-8 sm:my-0 px-6 sm:px-0 text-[#8C8C8C] text-[15px] sm:text-[13px] md:text-[16px] lg:text-[23px] sm:whitespace-nowrap">
              Subscribe to our{" "}
              <span className="font-bold text-white">Newsletter</span>
            </div>

            {/* INPUT + BUTTON */}
            <div className="flex flex-col sm:flex-row items-center gap-5 lg:gap-8 px-6 sm:px-0 w-full sm:w-auto">
              {/* INPUT */}
              <input
                type="email"
                placeholder="Your email"
                className="
        bg-[#2a2d31] border border-[#3A3D42] 
        rounded sm:rounded-[10px]
        text-sm sm:text-[12px] outline-none text-white 
        px-6 md:pr-30 lg:pr-60 xl:pr-100 py-2 sm:px-4 sm:py-1 lg:px-6 lg:py-2
        w-full
        "
              />

              {/* BUTTON */}
              <button
                className="cursor-pointer bg-gradient-to-r from-[#0086FF] to-[#B0D9FF] 
        p-2 sm:p-1 lg:p-2 rounded text-sm sm:text-[12px]
        w-full  sm:w-30 lg:w-auto whitespace-nowrap"
              >
                Subscribe <span>›</span>
              </button>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="hidden max-w-6xl text-[6px] md:text-[10px] lg:text-[13px] xl:text-[15px]  mx-auto px-6 py-8 sm:py-10 lg:py-15 sm:grid sm:grid-cols-3 gap-10 text-sm text-gray-300 ml-[30%]">
            {/* Address */}
            <div>
              <h4 className="text-[#0065BF] text-[8px] md:text-[12px] lg:text-[17px] xl:text-[20px] font-semibold mb-2">
                Address Business
              </h4>
              <p className="text-[#8C8C8C]">Amg workspace, Festac Town</p>
              <p className="text-[#8C8C8C]">Lagos, Nigeria</p>

              <div className="mt-8">
                <h4 className="text-[#0065BF] font-semibold mb-1 text-[10px] md:text-[12px] lg:text-[17px] xl:text-[20px]">
                  Contact Us
                </h4>
                <p className="text-[#8C8C8C]">xxxxxxxxx@gmail.com</p>
                <p className="text-[#8C8C8C]">+234 xx xxx xxx</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-2 text-[8px]md:text-[12px] lg:text-[17px] xl:text-[20px]">
                Services
              </h4>
              <ul className="space-y-3">
                <li className="text-[#8C8C8C]">Web Development</li>
                <li className="text-[#8C8C8C]">Mobile Development</li>
                <li className="text-[#8C8C8C]">Graphics Design</li>
                <li className="text-[#8C8C8C]">Consultation</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-2 text-[8px] md:text-[12px] lg:text-[17px] xl:text-[20px]">
                Quick Link
              </h4>
              <ul className="space-y-3">
                <li className="text-[#8C8C8C]">About Company</li>
                <li className="text-[#8C8C8C]">Need a Career</li>
                <li className="text-[#8C8C8C]">Meet Our Team</li>
                <li className="text-[#8C8C8C]">Clients Feedback</li>
                <li className="text-[#8C8C8C]">Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="sm:hidden relative w-full text-gray-300 py-5 px-6 sm:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
              {/* COMPANY */}
              <div>
                <h3 className="text-[#0065BF] font-semibold mb-3">Company</h3>

                {/* Social Icons */}
                <div className="flex absolute top-10 right-5 items-center gap-4 mt-12 pl-[70%] max-[380]:pl-0 text-gray-400">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-[#2b2a2a]"
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-[#9c9696]"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-[#9c9696]"
                  />
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-[#9c9696]"
                  />
                </div>
              </div>

              {/* SERVICES */}
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>

                <ul className="space-y-3 text-sm text-[#8C8C8C]">
                  <li>Web Development</li>
                  <li>Mobile Development</li>
                  <li>Graphics Design</li>
                  <li>Consultation</li>
                </ul>

                <h3 className="text-white font-semibold mt-10 mb-4">
                  Quick Link
                </h3>

                <ul className="space-y-3 text-sm text-[#8C8C8C]">
                  <li>About Company</li>
                  <li>Need a Career</li>
                  <li>Meet Our Team</li>
                  <li>Clients Feedback</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              {/* CONTACT INFO */}
              <div>
                <h3 className="text-white font-semibold mb-4">Contact Us</h3>

                <ul className="space-y-5 text-sm text-[#8C8C8C]">
                  {/* Address */}
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">
                      <img src="/images/location.svg" />
                    </span>
                    <p>
                      Amg workspace, Festac Town <br />
                      Lagos, Nigeria
                    </p>
                  </li>

                  {/* Email */}
                  <li className="flex gap-3">
                    <span className="text-blue-500">
                      <img src="/images/envelope.svg" />
                    </span>
                    <p>xxxxxxxxxxx@gmail.com</p>
                  </li>

                  {/* Phone */}
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500">
                      <img src="/images/phone.svg" />
                    </span>
                    <p>+234 xx xxx xxx</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          {/* Bottom Bar */}
          <div className="justify-between py-6 pb-5  bg-black sm:bg-[#1B1E23] text-xs text-gray-400 border-t border-[#404040] max-w-8xl mx-auto w-full">
            <Link href="/#hero">
            <div className="hidden sm:block items-center justify-center relative z-10 rounded-full w-5 h-5  lg:w-8 lg:h-8 mt-[-32] md:mt-[-34] lg:mt-[-38] bg-[#0065BF]  ml-[50%] border border-[#D9EDFF]">
              <img
                src="/images/inverted.svg"
                className="absolute top-[30%] left-[30%] w-2 h-2 lg:w-3 lg:h-3"
              />
            </div>
            </Link>
            {/* inner wrapper: w-full on small screens so the three flex-1 children can fill the bar */}
            <div className="flex flex-row justify-center sm:justify-between items-center">
              <div className="relative flex w-full sm:w-auto gap-3 sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[15px] mb-3 sm:mb-0 px-0">
                {/* left: small = flex-1 aligned left; md = no change (keeps whatever you currently have) */}
                <span className="flex-1 text-start whitespace-nowrap">
                  Privacy Policy
                </span>

                {/* middle: small = flex-1 centered; md = unchanged */}
                <span className="flex-1 absolute sm:static left-[38%] whitespace-nowrap ">
                  Terms and Condition
                </span>

                {/* right: small = flex-1 aligned right; md = unchanged */}
                <span className="flex-1 absolute sm:static right-0">
                  Support
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="text-[#8C8C8C] text-[8px] md:text-[10px] lg:text-[12px]  xl:text-[15px] font-medium">
                  Follow Us
                </span>
                <span className="h-0.5 w-7 bg-gray-200"></span>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-[#2b2a2a]
     
    sm:text-[8px]   
    md:text-[10px]   
    lg:text-[12px]
    xl:text-[15px] 
  "
                />
                <FontAwesomeIcon icon={faTwitter} className="text-[#9c9696] sm:text-[8px]   
    md:text-[10px]   
    lg:text-[12px] xl:text-[15px]" />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-[#9c9696] sm:text-[8px]   
    md:text-[10px]   
    lg:text-[12px] xl:text-[15px]"
                />
                <FontAwesomeIcon icon={faYoutube} className="text-[#9c9696] sm:text-[8px]   
    md:text-[10px]   
    lg:text-[12px] xl:text-[15px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-black pb-10 sm:p-4">
          <p className="text-[12px] sm:text-sm">
            Copyright © 2024 IISCE. All Right Reserved
          </p>
        </div>
      </div>
      </MaxWidthWrapper>
    </footer>
  );
}
