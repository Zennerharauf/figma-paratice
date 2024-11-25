import React from "react";
import Image from "next/image";

export default function Subscribe() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center px-6 py-12 bg-[#f9f9f9]">
      {/* Section Header */}
      <div className="text-center max-w-[1170px] mb-12">
        <h2 className="text-[14px] font-semibold tracking-[0.45em] text-[#8a898e] uppercase">
          Newsletter
        </h2>
        <h1 className="text-[32px] sm:text-[42px] font-bold text-[#0b1b35] leading-snug">
          Subscribe to Our Newsletter
        </h1>
        <p className="text-[16px] sm:text-[18px] text-[#5a5a5a] mt-4">
          Stay updated with the latest news, promotions, and updates delivered straight to your inbox.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-center justify-center max-w-[1170px] gap-8 sm:gap-12">
        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <Image
            src="/Frame (1).png"
            alt="Newsletter illustration"
            width={421}
            height={367}
            className="rounded-lg"
          />
        </div>

        {/* Subscription Form */}
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="w-full max-w-[500px]">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full h-[50px] sm:h-[60px] px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600] text-[16px] sm:text-[18px] text-[#333]"
              aria-label="Enter your email address"
            />
          </div>
          <button
            className="w-full max-w-[500px] mt-4 h-[50px] sm:h-[60px] bg-[#ff6600] text-white text-[16px] sm:text-[18px] font-semibold rounded-full shadow-lg hover:bg-[#e65500] transition-all duration-300"
            aria-label="Subscribe to our newsletter"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
