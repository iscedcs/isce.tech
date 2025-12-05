"use client";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

export default function RegisterNav() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [battery, setBattery] = useState<number | null>(null);
  const [charging, setCharging] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    function updateTime() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
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
    <div>
      <header className="w-full font-sans">
        <div className="max-w-8xl mx-auto w-full bg-white text-[#333] text-sm hidden md:flex justify-between items-center px-16 py-3 md:px-32 lg:px-48">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="white-fill-outline"
            />
            <span>isceteams@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[rgb(17,17,17)] font-medium">Follow Us</span>
            <span className="h-0.5 w-7 bg-gray-200"></span>
            <FontAwesomeIcon icon={faFacebookF} className="text-[#2b2a2a]" />
            <FontAwesomeIcon icon={faTwitter} className="text-[#9c9696]" />
            <FontAwesomeIcon icon={faLinkedinIn} className="text-[#9c9696]" />
            <FontAwesomeIcon icon={faYoutube} className="text-[#9c9696]" />
          </div>
        </div>

        {/* MOBILE SMART STATUS BAR */}
        <div className="md:hidden w-full bg-white flex justify-between items-center px-4 py-2 text-black text-sm font-medium">
          {/* TIME */}
          <span>{time}</span>

          {/* Dynamic Island */}
          <div className="w-24 h-6 bg-black rounded-full"></div>

          {/* STATUS ICONS */}
          <div className="flex items-center gap-2">
            {/* SIGNAL */}
            <FontAwesomeIcon icon={faSignal} className="text-black text-xs" />

            {/* WIFI ICON */}
            <FontAwesomeIcon icon={faWifi} className="text-black text-xs" />

            {/* BATTERY + OPTIONAL PERCENTAGE */}
            <div className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={getBatteryIcon()}
                className="text-black text-base"
              />
              {battery !== null && <span className="text-xs">{battery}%</span>}
            </div>
          </div>
        </div>
          <nav className="navbar w-full bg-gradient-to-r from-[#231457] to-[#333eda] via-[#7727c7] text-white shadow-lg">
            <div
              className="max-w-8xl mx-auto flex items-center 
      px-4 py-4 
      sm:px-5 sm:py-5 
      md:px-12 md:py-5 
      lg:px-20"
            >

              {/* DESKTOP MENU */}
              <ul
                className="hidden md:flex items-center 
        gap-15 lg:gap-20
        text-[14px] lg:text-[15px] ml-100 tracking-wide"
              >
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "Blog", path: "/blog" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
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
              after:h-[2px]
              after:w-0
              after:bg-white
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                <Link
                  href="/contact"
                  className="border border-white text-white bg-[#242431] px-4 py-3 
            rounded-md hover:bg-pink-500 transition duration-300 
            text-sm lg:text-[15px]"
                >
                  Get in Touch
                </Link>
              </ul>

              {/* MOBILE HAMBURGER */}
              <button className="md:hidden" onClick={() => setOpen(!open)}>
                {open ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            {open && (
              <div
                className="md:hidden bg-[#071121] 
        px-4 sm:px-6 
        pb-6 flex flex-col gap-4 shadow-xl"
              >
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "Blog", path: "/blog" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="bg-[#D2D6DB] text-[#222] py-3 px-4 rounded-md 
              text-[14px] sm:text-[15px] tracking-wide font-medium"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="bg-blue-600 text-white text-center py-4 rounded-md 
            text-[14px] sm:text-[15px] tracking-wide mt-2"
                >
                  Get in Touch
                </Link>
              </div>
            )}
          </nav>
      </header>
    </div>
  );
}
