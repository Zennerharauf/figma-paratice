import React from "react";
import Image from "next/image";

export default function Testimonial() {
  const testimonials = [
    {
      image: "/Userpic.png",
      text: "Get a fully retina-ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support.",
      name: "Rayhan Curran",
    },
    {
      image: "/Userpic (1).png",
      text: "As a business targeting high-net-worth individuals, we were looking for a slick, cool, and minimalistic design for our website.",
      name: "Kayley Frame",
    },
    {
      image: "/Mask.png",
      text: "The most important part of the Startup Framework is the samples.",
      name: "Gene Whitfield",
    },
    {
      image: "/Mask (1).png",
      text: "I’ve built my website with Startup just in one day, and it was ready-to-go.",
      name: "Allan Kim",
    },
  ];

  return (
    <section className="flex flex-col items-center py-16 sm:py-24 bg-[#f9f9f9]">
      {/* Section Header */}
      <div className="w-full max-w-[1170px] text-center mb-10">
        <h2 className="text-[12px] sm:text-[14px] font-medium tracking-[0.35em] text-[#9a9a9a] uppercase">
          Testimonials
        </h2>
        <h1 className="text-[32px] sm:text-[42px] font-semibold text-[#1A2C4B] leading-tight">
          What Clients Say About Us
        </h1>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 sm:px-0 max-w-[1170px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 hover:shadow-2xl transition-all duration-300"
          >
            {/* User Image */}
            <div className="flex-shrink-0">
              <Image
                src={testimonial.image}
                alt={`${testimonial.name}'s image`}
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>

            {/* Testimonial Content */}
            <div>
              <p className="text-[14px] sm:text-[16px] font-medium text-[#0b1b35] leading-relaxed mb-4">
                {testimonial.text}
              </p>
              <h3 className="text-[12px] sm:text-[14px] font-bold text-[#8a898e]">
                {testimonial.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
