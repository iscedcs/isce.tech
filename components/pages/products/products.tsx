"use client";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductsSection() {
  return (
    <div className="w-full">
      {/* Hero / Intro */}

      <div className="bg-[#07111F] py-24 px-6 sm:px-30 md:px-35 lg:px-40 xl:px-60">
        <MaxWidthWrapper>
          <div className="text-center text-[#D9D9D9] ">
            <h2 className="font-semibold text-[30px] sm:text-[35px] md:text-[40px] xl:text-[45px] mb-4">
              ISCE <span className="font-normal">Products</span>
            </h2>

            <p className="text-gray-300 text-[16px] sm:text-[10px] md:text-[12px] lg:text-[18px]  leading-relaxed">
              We build and manage scalable digital platforms across education,
              transportation, and interconnected ecosystems.
            </p>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="bg-[#0B1F24]">
        {/* Education Section */}
        <MaxWidthWrapper>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20">
            <h2 className=" font-bold mb-4 bg-linear-to-r from-[#275555] to-[#FFFF00] via-[#19270c] bg-clip-text text-transparent text-5xl text-center">
              PalmtechnIQ
            </h2>
            <p className="text-[15px] px-60 text-gray-300 mb-6 text-center">
              Empowering the Next Generation of Tech Innovators. A modern
              education platform delivering structured tech training and digital
              skills.
            </p>
            <div className="grid px-40 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-6">
              <Card className="p-4 bg-[#20473b] border-none shadow-sm hover:shadow-[0_0_40px_5px_rgba(16,185,129,0.15)] transition-shadow">
                <CardContent>
                  <h3 className="text-center text-4xl font-bold text-black ">
                    Learning
                  </h3>
                  <p className="text-center text-gray-300 mt-2">
                    {" "}
                    Interactive learning with AI-powered guidance{" "}
                  </p>
                </CardContent>
              </Card>
              <Card className="p-4 bg-[#20473b] border-none shadow-sm hover:shadow-[0_0_40px_5px_rgba(16,185,129,0.15)] transition-shadow">
                <CardContent>
                  {" "}
                  <h3 className="text-center text-4xl font-bold text-black">
                    Access
                  </h3>{" "}
                  <p className="text-center mt-2 text-gray-300 ">
                    {" "}
                    Accessible and scalable for schools and individuals{" "}
                  </p>
                </CardContent>
              </Card>
              <Card className="p-4 bg-[#20473b] border-none shadow-sm hover:shadow-[0_0_40px_5px_rgba(16,185,129,0.15)] transition-shadow">
                <CardContent>
                  <h3 className="text-center text-4xl font-bold text-black ">
                    Skills
                  </h3>{" "}
                  <p className="text-center text-gray-300 mt-2 ">
                    {" "}
                    Structured skill progression for real-world tech readiness{" "}
                  </p>
                </CardContent>
              </Card>{" "}
            </div>
            <div className="bg-black rounded-full py-2 px-3 w-46">
              <Link
                className="font-semibold bg-linear-to-r from-[#275555] to-[#FFFF00] via-[#19270c] bg-clip-text text-transparent"
                href="https://palmtechniq.com">
                Explore PalmtechnIQ
              </Link>
            </div>
          </motion.div>

          {/* Transportation Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20">
            <section className="px-6 md:px-20 lg:px-32 py-16">
              {/* Header */}
              <div className="mb-14 max-w-2xl">
                <h2 className="text-5xl font-bold mb-4 text-[#ad7219]">
                  Transpay
                </h2>
                <p className="text-gray-300">
                  Revolutionizing transport revenue management through
                  automated, transparent, and cashless levy collection systems.
                </p>
              </div>

              {/* Process Flow */}
              <div className="relative pl-6">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 h-full w-px bg-white/10" />

                <ul className="space-y-12">
                  {/* Step 1 */}
                  <li className="relative flex gap-6">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                      🚫
                    </span>
                    <div>
                      <p className="font-semibold text-lg">
                        Cashless Operations
                      </p>
                      <p className="text-sm text-gray-300 max-w-md">
                        Eliminate physical cash handling and completely remove
                        revenue leakage from transport operations.
                      </p>
                    </div>
                  </li>

                  {/* Step 2 */}
                  <li className="relative flex gap-6">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400">
                      📡
                    </span>
                    <div>
                      <p className="font-semibold text-lg">
                        Real-time Monitoring
                      </p>
                      <p className="text-sm text-gray-300 max-w-md">
                        Monitor transport activity live with accurate reporting
                        and actionable operational insights.
                      </p>
                    </div>
                  </li>

                  {/* Step 3 */}
                  <li className="relative flex gap-6">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500/15 text-lime-400">
                      🔒
                    </span>
                    <div>
                      <p className="font-semibold text-lg">
                        Secure Revenue Collection
                      </p>
                      <p className="text-sm text-gray-300 max-w-md">
                        Automated, tamper-proof levy processing designed for
                        transparency and trust.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-black rounded-full py-2 px-3 w-37">
                <Link
                  className="text-center font-semibold  text-[#ad7219]"
                  href="https://www.transpaytms.com/">
                  Explore Transpay
                </Link>
              </div>
            </section>
          </motion.div>

          {/* Ecosystem Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20">
            {/* Header */}
            <div>
              <h2 className="text-5xl font-bold mb-4 text-center">Ecosystem</h2>
              <p className="text-gray-300 text-center">
                The GADA Ecosystem is a unified digital infrastructure
                connecting communication, payments, and commerce into one
                seamless platform.
              </p>
            </div>

            {/* Ecosystem Layout */}
            <div className="grid gap-10 lg:grid-cols-3 items-center">
              {/* Left Nodes */}
              <div className="rounded-xl border p-5 border-cyan-400/40 transition group">
                <h3 className="font-semibold text-lg mb-1">Connect</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Communication and system integration across the ecosystem.
                </p>

                <a
                  href="/connect"
                  className="
      inline-flex items-center gap-2
      text-sm font-semibold
      text-cyan-400
      opacity-80 group-hover:opacity-100
      transition
    ">
                  Explore Connect
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Core Node */}
              <div className="flex flex-col gap-10 mt-30 justify-center">
                <div className="relative rounded-2xl border border-emerald-400/40 bg-emerald-500/5 p-8 text-center shadow-[0_0_40px_5px_rgba(16,185,129,0.15)]">
                  <h3 className="text-2xl font-bold mb-2">GADA</h3>
                  <p className="text-sm text-gray-300 max-w-xs">
                    The central hub powering identity, coordination, and shared
                    services across all platforms.
                  </p>
                  <a
                    href="/connect"
                    className="
      inline-flex items-center gap-2
      text-sm font-semibold
      text-emerald-400
      opacity-80 group-hover:opacity-100
      transition
    ">
                    Explore GADA
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
                <div className="rounded-xl border p-5 border-lime-400/40 transition">
                  <h3 className="font-semibold text-lg mb-1">Wallet</h3>
                  <p className="text-sm text-gray-400">
                    Secure digital payments and transaction management.
                  </p>
                  <a
                    href="/connect"
                    className="
      inline-flex items-center gap-2
      text-sm font-semibold
      text-lime-400
      opacity-80 group-hover:opacity-100
      transition
    ">
                    Explore Wallet
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Node */}
              <div className="space-y-6">
                <div className="rounded-xl border p-5 border-amber-400/40 transition">
                  <h3 className="font-semibold text-lg mb-1">Store</h3>
                  <p className="text-sm text-gray-400">
                    A digital marketplace for products, services, and
                    integrations.
                  </p>
                  <a
                    href="/connect"
                    className="
      inline-flex items-center gap-2
      text-sm font-semibold
      text-amber-400
      opacity-80 group-hover:opacity-100
      transition
    ">
                    Explore Store
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
          </motion.section>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
