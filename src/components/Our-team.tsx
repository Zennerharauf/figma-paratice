import React from "react";
import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="flex flex-col items-center py-16 sm:py-24 bg-[#f9f9f9]">
      {/* Section Header */}
      <div className="w-full max-w-[1170px] text-center mb-10">
        <h2 className="text-[12px] sm:text-[14px] font-medium tracking-[0.35em] text-[#9a9a9a] uppercase">
          Our Team
        </h2>
        <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#1A2C4B] leading-tight">
          Meet the People Behind the Vision
        </h1>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6 sm:px-0">
        {[
          {
            image: "/girlimage.png",
            name: "Vanessa Laird",
            role: "UI Designer",
          },
          {
            image: "/boyimage.png",
            name: "Mason Campbell",
            role: "UX Designer",
          },
          {
            image: "/girlimage2.png",
            name: "Irea Evans",
            role: "Client Manager",
          },
        ].map((member, index) => (
          <div
            key={index}
            className="w-[280px] sm:w-[350px] bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center border border-[#ddd] transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="mt-6">
              <Image
                src={member.image}
                alt={`${member.name}'s photo`}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>

            {/* Member Info */}
            <div className="text-center mt-4">
              <h3 className="text-[20px] font-semibold text-[#1A2C4B]">
                {member.name}
              </h3>
              <p className="text-[14px] text-[#555555]">{member.role}</p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mt-6 mb-4 border-t pt-4 w-full">
              {["/fa-twitter.png", "/fa-facebook.png", "/fa-dribbble.png"].map(
                (icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 rounded-full bg-[#f4f4f4] hover:bg-[#ff6600] hover:text-white transition-all duration-300"
                  >
                    <Image
                      src={icon}
                      alt="Social icon"
                      width={20}
                      height={20}
                    />
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
