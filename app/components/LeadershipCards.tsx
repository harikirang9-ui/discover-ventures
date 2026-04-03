"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string[];
  linkedin: string;
  email: string;
}

export default function LeadershipCards({ team }: { team: TeamMember[] }) {
  return (
    <section className="bg-navy">
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
              <div className="flex flex-col p-6 md:py-8 md:px-8 lg:py-10 lg:px-10">
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

                {/* Name + Title */}
                <div className="mt-6 md:mt-8">
                  <h3 className="font-serif font-semibold text-navy-dark text-xl md:text-2xl lg:text-[28px] lg:leading-[47px]">
                    {member.name}
                  </h3>
                  <p className="text-navy-dark text-[18px]">
                    {member.title}
                  </p>
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
                <a
                  href={`mailto:${member.email}`}
                  className="w-12 h-12 md:w-16 md:h-16 bg-blue-accent flex items-center justify-center hover:bg-blue-accent/80 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.093L2.25 6.75" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
