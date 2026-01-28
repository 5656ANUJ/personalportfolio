"use client";
import SectionWrapper from "../components/SectionWrapper";

export default function AboutSec() {
  const resumeLink =
    "https://docs.google.com/document/d/1Dnqimfj390AeQMrvs6_cmc2ywYx_Ma6JiPGfv70lPyk/edit?usp=sharing";

  return (
    <SectionWrapper
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 md:px-20 py-12 md:py-20"
    >
      <div className="w-full md:w-1/2 h-[250px] md:h-[600px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
        <img
          className="w-full h-full object-cover"
          src="https://framerusercontent.com/images/lpzHMGI6fqkXruZWBeST07brk.jpg?width=1200&height=1600"
          alt="About Anuj"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-5 md:pl-10">
        <div className="inline-flex h-auto items-center justify-center rounded-2xl md:rounded-3xl px-4 py-1.5 md:pt-1.25 md:pr-8 md:pb-1.25 md:pl-9.5 bg-[#1A1A1A] [background-blend-mode:plus-lighter] backdrop-blur-[6px] shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.5),inset_2px_2px_1px_-2px_#B3B3B3,inset_-2px_-2px_1px_-2px_#B3B3B3,inset_0_0_0_1px_#999,inset_0_0_22px_0_rgba(242,242,242,0.5)]">
          <span className="text-sm md:text-base">About</span>
        </div>

        <div className="text-xl md:text-4xl font-semibold leading-tight">
          Solving real problems with purposeful, user-first design
        </div>
        <div>
          <p className="text-sm md:text-lg text-white/70 leading-relaxed">
            I'm a UI/UX and product designer with a strong frontend background,
            focused on creating meaningful digital experiences that solve real
            user problems. I enjoy working from early ideas and wireframes
            through to clean, responsive frontend implementation.
          </p>
        </div>

        <div>
          <p className="text-sm md:text-lg text-white/70 leading-relaxed">
            I believe good design goes beyond visuals. It's about understanding
            users, simplifying decisions, and building interfaces that feel
            natural to use. By combining design and development, I ensure every
            product decision translates smoothly into real-world execution.
          </p>
        </div>

        <button
          onClick={() => window.open(resumeLink, "_blank")}
          className="
           w-fit px-6 md:px-10 py-2.5 md:py-4 rounded-full text-sm md:text-base
          bg-lime-400 text-black font-semibold
          hover:scale-105 transition-transform
          shadow-[0_0_30px_rgba(163,230,53,0.6)]
        "
        >
          View Resume
        </button>
      </div>
    </SectionWrapper>
  );
}
