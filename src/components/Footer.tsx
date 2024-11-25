import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f9f9f9] py-10 px-4">
      <div className="container mx-auto max-w-[1170px] grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
        {/* Logo Section */}
        <div className="flex justify-center sm:justify-start">
          <Image src="/Logo.png" alt="Epixelab Logo" width={111} height={23} />
        </div>

        {/* Center Text */}
        <div className="text-center text-[#1e0e62] text-[14px] sm:text-[16px] font-medium leading-6">
          &copy; {new Date().getFullYear()} Epixelab. All rights reserved.
        </div>

        {/* Links Section */}
        <div className="flex justify-center sm:justify-end flex-wrap gap-4 text-[#1e0e62]">
          <a
            href="#"
            className="text-[14px] sm:text-[16px] font-medium hover:underline"
            aria-label="Portfolio"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="text-[14px] sm:text-[16px] font-medium hover:underline"
            aria-label="How it Works"
          >
            How it Works
          </a>
          <a
            href="#"
            className="text-[14px] sm:text-[16px] font-medium hover:underline"
            aria-label="Pricing"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[14px] sm:text-[16px] font-medium hover:underline"
            aria-label="About"
          >
            About
          </a>
          <a
            href="#"
            className="text-[14px] sm:text-[16px] font-medium hover:underline"
            aria-label="Login"
          >
            Login
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t-[1px] border-[#d6d6d6] mt-8"></div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-[#15143966] text-[14px] sm:text-[16px] leading-6">
      Startup Framework contains components and complex blocks which can easily be integrated into almost any design. 
      </div>
    </footer>
  );
}
