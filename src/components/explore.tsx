import React from "react";
import Image from "next/image";

export default function Explore() {
  return (
    <div className="w-full min-h-screen flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 mt-40 gap-8">
      {/* Text Section */}
      <div className="flex flex-col max-w-[400px] sm:max-w-[350px] text-left">
        <h1 className="font-[DM Sans] text-[28px] sm:text-[22px] font-bold leading-[38px] sm:leading-[32px] text-[#1e0e62] pb-6">
          Many Blocks and Components
        </h1>
        <p className="font-[DM Sans] text-[16px] font-normal leading-[26px] text-[#6b6b6b] pb-6">
          Startup Framework contains components and complex blocks that can be
          easily integrated into almost any design. Build your project faster
          and better!
        </p>
        <button className="w-[140px] h-[48px] font-[DM Sans] rounded-full border-[2px] border-[#1e0e62] text-[16px] font-medium leading-[22px] text-[#1e0e62] hover:bg-[#1e0e62] hover:text-white transition duration-300">
          Explore
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[700px]">
        <Image
          src="/Video Player.png"
          alt="Video Player"
          width={687}
          height={385}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
//text-[#1e0e62]