"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "./FadeIn";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string[];
  linkedin: string;
  x?: string;
  email: string;
}

export default function LeadershipCards({ team }: { team: TeamMember[] }) {
  const [toast, setToast] = useState(false);

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <section className="bg-navy relative">
      {/* Page Heading */}
      <div className="px-6 md:px-16 lg:px-28 pt-2 md:pt-3 lg:pt-4 pb-10 md:pb-14">
        <FadeIn>
          <h1 className="font-serif text-white text-3xl md:text-4xl lg:text-[50px] lg:leading-[53px]">
            Leadership
          </h1>
        </FadeIn>
      </div>

      {/* Cards */}
      <div className="px-6 md:px-16 lg:px-28 flex flex-col gap-10 md:gap-14 pb-10 md:pb-16">
        {team.map((member, index) => (
          <FadeIn key={index} delay={index * 100}>
          <div className="flex flex-col md:flex-row md:min-h-[500px]">
            {/* Image section */}
            <div className="relative w-full md:w-[300px] lg:w-[432px] shrink-0 h-[280px] md:h-auto bg-[#162E6D]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] md:w-[88%] h-[95%] md:h-[92%]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 432px"
                />
              </div>
            </div>

            {/* White content area */}
            <div className="relative bg-white flex-1">
              <div className="flex flex-col p-6 pb-20 md:py-8 md:px-8 lg:py-10 lg:px-10">
                {/* Name + Title */}
                <div className="mb-6 md:mb-8">
                  <h3 className="font-serif font-semibold text-navy-dark text-xl md:text-2xl lg:text-[28px] lg:leading-[47px]">
                    {member.name}
                  </h3>
                  <p className="text-navy-dark text-[18px]">
                    {member.title}
                  </p>
                </div>

                {/* Bio */}
                <div>
                  {member.bio.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-navy-dark text-[18px] leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Social Icons — pinned bottom-right */}
              <div className="absolute bottom-0 right-0 flex">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-16 md:h-16 bg-blue-accent flex items-center justify-center border-r border-[#B3E7FF] hover:bg-blue-accent/80 transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {member.x && (
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-16 md:h-16 bg-blue-accent flex items-center justify-center border-r border-[#B3E7FF] hover:bg-blue-accent/80 transition-colors"
                    aria-label={`${member.name} X`}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
                <button
                  onClick={() => copyEmail(member.email)}
                  className="w-12 h-12 md:w-16 md:h-16 bg-blue-accent flex items-center justify-center hover:bg-blue-accent/80 transition-colors"
                  aria-label={`Copy ${member.name} email`}
                >
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.093L2.25 6.75" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          </FadeIn>
        ))}
      </div>

      {/* Toast */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 bg-white text-navy-dark px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 z-50 ${
          toast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        Email copied to clipboard
      </div>
    </section>
  );
}
