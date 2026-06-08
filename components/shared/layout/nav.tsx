"use client";

import MaxWidthWrapper from "../max-width-wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  FacebookIcon,
  LinkedinIcon,
  Menu,
  TwitterIcon,
  X,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import image from "next/image";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpen,
  faBatteryFull,
  faBatteryThreeQuarters,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryEmpty,
  faWifi,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function NavComponent() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [battery, setBattery] = useState<number | null>(null);
  const [charging, setCharging] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    function updateTime() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // ---- BATTERY API (Android/Chrome) ----
  useEffect(() => {
    const nav = navigator as Navigator & {
      getBattery?: () => Promise<any>;
    };

    if (nav.getBattery) {
      nav.getBattery().then((batt) => {
        function updateStatus() {
          setBattery(Math.round(batt.level * 100)); // now valid
          setCharging(batt.charging);
        }

        updateStatus();

        batt.addEventListener("levelchange", updateStatus);
        batt.addEventListener("chargingchange", updateStatus);
      });
    } else {
      // No Battery API (iPhone, many browsers)
      setBattery(null); // fallback
    }
  }, []);

  // ---- ONLINE/OFFLINE DETECTION ----
  useEffect(() => {
    function update() {
      setIsOnline(navigator.onLine);
    }
    window.addEventListener("online", update);
    window.addEventListener("offline", update);

    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  // ---- BATTERY ICON SELECTOR ----
  function getBatteryIcon() {
    if (battery === null) return faBatteryFull; // Fallback icon

    if (battery > 80) return faBatteryFull;
    if (battery > 60) return faBatteryThreeQuarters;
    if (battery > 40) return faBatteryHalf;
    if (battery > 20) return faBatteryQuarter;
    return faBatteryEmpty;
  }

  return (
    <header className="font-sans fixed z-50 w-full bg-white">
      <MaxWidthWrapper>
        <div className="text-[#333]  text-sm hidden sm:flex justify-between items-center px-16 py-3 ">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="white-fill-outline"
            />
            <span>hello@isce.tech</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm font-medium">Follow Us</span>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.facebook.com/share/1JWQcLWNxw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2b2a2a]">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/isceapp?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9c9696]
">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/isceapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9c9696]">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@isce-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9c9696]">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE SMART STATUS BAR
        <div className="sm:hidden w-full bg-white flex justify-between items-center px-4 py-2 text-black text-sm font-medium">
          TIME
          <span>{time}</span>

           Dynamic Island 
          <div className="w-24 h-6 bg-black rounded-full"></div>

          STATUS ICONS
          <div className="flex items-center gap-2">
             SIGNAL
            <FontAwesomeIcon icon={faSignal} className="text-black text-xs" />

             WIFI ICON 
            <FontAwesomeIcon icon={faWifi} className="text-black text-xs" />
 BATTERY + OPTIONAL PERCENTAGE 
            <div className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={getBatteryIcon()}
                className="text-black text-base"
              />
              {battery !== null && <span className="text-xs">{battery}%</span>}
            </div>
          </div>
        </div> */}
      </MaxWidthWrapper>
      <nav className="navbar w-full bg-linear-to-r from-[#0E1622] to-[#0B111A] text-white shadow-lg">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between py-4 md:py-5">
            {/* LEFT SIDE */}
            <div className="flex items-center text-[12px] tracking-wide">
              {/* Desktop: ISCE */}
              <Link href="/" className="cursor-pointer">
                <img
                  className="hidden sm:block"
                  width="100"
                  height="40"
                  src="/images/isce.png"
                />
              </Link>
              {/* Mobile: ISCE Digital */}
              <span className="flex  gap-1 sm:hidden">
                <Link href="/">
                  <Image
                    src="/images/isce_logo_standalone_white.png"
                    width={100}
                    height={100}
                    alt=""
                    quality={100}
                    className="w-full h-10"
                  />
                </Link>
              </span>
            </div>
            {/* DESKTOP MENU */}
            <ul
              className="hidden sm:flex items-center 
        sm:gap-6 md:gap-10 lg:gap-15
        text-[14px] lg:text-[15px] tracking-wide">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                // { name: "Blog", path: "/blog" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact#contact" },
                // { name: "Product", path: "/product" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="
              relative 
              text-gray-400
              after:absolute
              after:left-0
              after:-bottom-1
after:h-0.5
              after:w-0
              after:bg-blue-500
              after:transition-all
              after:duration-300
              hover:after:w-full
            ">
                    {item.name}
                  </Link>
                </li>
              ))}

              <Link
                href="/contact"
                className="border border-white text-white bg-[#242431] px-2 lg:px-4 py-2 
            rounded-md hover:bg-blue-500 transition duration-300 
            text-sm lg:text-[15px] whitespace-nowrap">
                Get in Touch
              </Link>
            </ul>

            {/* MOBILE HAMBURGER */}

            <button className="sm:hidden" onClick={() => setOpen(true)}>
              <Menu size={32} />
            </button>
          </div>

          {/* MOBILE DROPDOWN MENU */}

          {open && (
            <div
              className="fixed inset-0 
    z-50 sm:hidden overflow-hidden bg-linear-to-r from-[#0E1622] to-[#0B111A] 
        p-10 
         flex flex-col gap-4 shadow-xl">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Blog", path: "/blog" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact#contact" },
                { name: "Product", path: "/product" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="bg-[#8e9397] text-[#222] py-3 px-4 rounded-md 
              text-[14px] sm:text-[15px] tracking-wide font-medium">
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-blue-600 text-black border border-white text-center py-4 rounded-md 
            text-[14px] sm:text-[15px] tracking-wide mt-60">
                Get in Touch
              </Link>
            </div>
          )}
        </MaxWidthWrapper>
      </nav>
    </header>
  );
}
