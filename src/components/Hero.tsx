import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-20 py-12 sm:py-28">
      {/* Text Section */}
      <div className="max-w-lg sm:max-w-xl text-left mb-10 sm:mb-0">
        <h1 className="text-[40px] sm:text-[64px] font-bold text-[#1A2C4B] leading-tight sm:leading-[76px]">
        We boost
        growth for your statup business
        </h1>
        <p className="text-[16px] sm:text-[20px] text-[#4F4F4F] mt-4 sm:mt-6 leading-relaxed">
        Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <button className="w-[140px] sm:w-[180px] h-[45px] sm:h-[50px] bg-[#ff5500] text-white font-medium rounded-md hover:bg-[#e64d00] transition-all duration-300">
            Get Started
          </button>
          <div className="flex items-center gap-3">
            <Image 
            src="/Learn More icon.png" 
            alt="Learn more icon" 
            width={40} 
            height={50} 
            className="opacity-90"
            />
            <button className="text-[16px] sm:text-[18px] font-semibold text-[#333333] hover:text-[#ff5500] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Visual Section */}
      <div className="relative flex items-center justify-center">
        {/* Background Shape */}
        <div className="absolute w-[200px] sm:w-[600px] h-[300px] sm:h-[460px] bg-[#e6f2ff] rounded-full -z-10 transform translate-y-16 sm:translate-y-10"></div>

        {/* Images */}
        <div>
        <Image
            src="/backgroundimg.png"
            alt="Profile illustration"
            width={250}
            height={250}
            priority
          />
        </div>
        <div className="relative w-[300px] sm:w-[500px] h-auto">
        <Image
            src="/guyimg.png"
            alt="Profile illustration"
            width={500}
            height={600}
            priority
          />
        </div>
        
        <div className="absolute top-[120px] sm:top-[160px] left-[-20px] sm:left-[100px] w-[120px] sm:w-[200px]">
          <Image
            src="/lightbulb.png"
            alt="Decorative frame"
            width={200}
            height={120}
          />
        </div>
      </div>
    </section>
  );
}
