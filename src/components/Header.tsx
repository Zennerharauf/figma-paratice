import React from "react";
import Image from "next/image";
import logo from "/logo.png"



export default function Header() {
  return (
    <header className="w-screen max-w-[1170px] h-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto py-3 relative top-8">
      {/* Logo Section */}
      <div className="flex justify-center sm:justify-start items-center">
        <Image src={logo} alt="logo" width={200} height={50} priority />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center items-center sm:gap-6 gap-4 text-black text-[17px] font-sans font-semibold">
        <a href="#" className="hover:text-[#ff6600] transition-all duration-300">Home</a>
        <a href="#" className="hover:text-[#ff6600] transition-all duration-300">About</a>
        <a href="#" className="hover:text-[#ff6600] transition-all duration-300">App</a>
        <a href="#" className="hover:text-[#ff6600] transition-all duration-300">Contact</a>
      </nav>

      {/* Authentication Buttons */}
      <div className="flex justify-center sm:justify-end items-center gap-4">
        <a href="#"className="text-[17px] font-sans font-medium hover:underline transition-all duration-300">Log in</a>
        <a href="#" className="w-[110px] h-[45px] rounded-md bg-[#ff6600] text-white text-[16px] font-medium flex items-center justify-center hover:opacity-90 transition-opacity duration-300">
          Sign up
        </a>
      </div>
    </header>
  );
}
