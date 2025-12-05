"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AuthAnimationTest({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  return (
    <motion.section
  className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#231942] to-[#3842D1] via-[#7F3FBF]"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
    <Link href="/store">
        <div className="flex flex-row gap-3 mb-4 left-10 top-10 absolute">
        <img src="/images/arrowwhite.svg" className="w-4 h-b" />
        <p className="text-[#8C8C8C]">Back to ISCE Home</p>
        </div>
        </Link>
      {/* FORM fades in AFTER animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.7, ease: "easeOut" }}
        className="relative z-50 bg-white w-[90%] max-w-[450px] rounded-2xl p-8 shadow-xl my-20"
      >
        {/* ICON */}
        <div className="w-full flex justify-center mb-3">
          <div className="w-14 h-14 flex items-center justify-center">
            <Image
              src="/images/circle.svg"
              alt="logo"
              width={36}
              height={36}
            />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-center text-[28px] font-semibold bg-gradient-to-r from-[#0052D4] to-[#4364F7] bg-clip-text text-transparent ">
          {isAuthenticated ? "Welcome Back" : "Join ISCE"}
        </h2>

        <p className="text-center text-sm text-gray-500 mt-1">
          {isAuthenticated
            ? "Sign in to continue shopping"
            : "Join the ISCE ecosystem — shop innovation, live smart"}
        </p>

        {/* FORM */}
        <form className="mt-6 space-y-4">
          {/* SIGNUP → FULL NAME */}
          {!isAuthenticated && (
            <div className="space-y-1">
              <label className="text-[13px] text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-[#F5F5F7] border border-[#E0E0E0] text-sm px-4 py-3 rounded-lg outline-none focus:border-blue-400 transition"
              />
            </div>
          )}

          {/* EMAIL */}
          <div className="space-y-1">
            <label className="text-[13px] text-gray-600">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-[#F5F5F7] border border-[#E0E0E0] text-sm px-4 py-3 rounded-lg outline-none focus:border-blue-400 transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="space-y-1">
            <label className="text-[13px] text-gray-600">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full bg-[#F5F5F7] border border-[#E0E0E0] text-sm px-4 py-3 rounded-lg outline-none focus:border-blue-400 transition"
            />
          </div>

          {/* SIGNUP → CONFIRM PASSWORD */}
          {!isAuthenticated && (
            <div className="space-y-1">
              <label className="text-[13px] text-gray-600">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full bg-[#F5F5F7] border border-[#E0E0E0] text-sm px-4 py-3 rounded-lg outline-none focus:border-blue-400 transition"
              />
            </div>
          )}

          {/* FORGOT PASSWORD */}
          {isAuthenticated && (
            <div className="text-right -mt-1">
              <button className="text-[13px] text-[#0086FF] ">
                Forgot password?
              </button>
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0086FF] to-[#B0D9FF] text-white text-sm font-medium py-3 rounded-lg hover:bg-[#2374F0] transition mt-2"
          >
            {isAuthenticated ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="relative flex items-center my-6">
          <span className="flex-grow h-px bg-gray-200"></span>
          <span className="px-3 text-xs text-gray-400">Or Continue with</span>
          <span className="flex-grow h-px bg-gray-200"></span>
        </div>

        {/* SOCIAL LOGIN */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg text-sm">
            <img src="/images/google.svg" width={12} height={12} alt="Google" />
            Google
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg text-sm">
            <img src="/images/apple.svg" width={12} height={12} alt="Apple" />
            Apple
          </button>
        </div>
        <p className="text-center text-xs text-black  mt-4">Don't have an account?<span className="text-[#0086FF]"> Sign Up</span></p>
      </motion.div>
    </motion.section>
  );
}
