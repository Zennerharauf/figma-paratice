import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section className="flex flex-col items-center py-16 sm:py-24 bg-[#f9f9f9]">
      {/* Section Header */}
      <div className="w-full max-w-[1170px] text-center mb-10">
        <h2 className="text-[12px] sm:text-[14px] font-medium tracking-[0.35em] text-[#9a9a9a] uppercase">
          Our Services
        </h2>
        <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#1A2C4B] leading-tight">
        Our Vison & Our Goal
        </h1>
      </div>

      {/* Services Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6 sm:px-0">
        {[
          {
            icon: "/Activity.png",
            title: "Graphic Design",
            description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos id nulla perspiciatis accusantium mollitia provident, laudantium corrupti nemo, magni, debitis natus cum reiciendis facilis quo sint esse perferendis! Modi, velit!"
            
          },
          {
            icon: "/Video.png",
            title: "Video Editing",
            description:
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos id nulla perspiciatis accusantium mollitia provident, laudantium corrupti nemo, magni, debitis natus cum reiciendis facilis quo sint esse perferendis! Modi, velit!"
          },
          {
            icon: "/Chart.png",
            title: "Digital Marketing",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos id nulla perspiciatis accusantium mollitia provident, laudantium corrupti nemo, magni, debitis natus cum reiciendis facilis quo sint esse perferendis! Modi, velit!"
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-[280px] sm:w-[350px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center border border-[#ddd] p-6 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-10px]"
          >
            {/* Service Icon */}
            <div className="mb-6">
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={76}
                height={76}
              />
            </div>

            {/* Service Title */}
            <h3 className="text-[22px] sm:text-[28px] font-semibold text-[#1A2C4B] mb-4">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="text-[14px] sm:text-[16px] text-[#555555] mb-6">
              {service.description}
            </p>

            {/* Learn More Button */}
            <button className="w-[140px] sm:w-[162px] py-2 sm:py-3 rounded-md bg-[#ff6600] text-[14px] sm:text-[16px] font-medium text-white hover:bg-[#e05500] transition-all duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
