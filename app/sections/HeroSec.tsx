"use client";

import SplitText from "../reactbits/Splittext";
import SectionWrapper from "../components/SectionWrapper";

export default function HeroSec() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper
      id="home"
      className="w-full min-h-[60vh] flex flex-col items-center justify-start gap-5 md:gap-10 mt-24 md:mt-55 px-4"
    >
      <div
        className="
  inline-flex h-auto items-center justify-center rounded-2xl md:rounded-3xl 
  px-4 py-1.5 md:pt-1.25 md:pr-8 md:pb-1.25 md:pl-9
  bg-[#1A1A1A] [background-blend-mode:plus-lighter]
  backdrop-blur-[6px]
  shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.5),inset_2px_2px_1px_-2px_#B3B3B3,inset_-2px_-2px_1px_-2px_#B3B3B3,inset_0_0_0_1px_#999,inset_0_0_22px_0_rgba(242,242,242,0.5)]
"
      >
        <h1 className="text-xs md:text-base">Hello! I'm Anuj</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 md:gap-10 text-center">
        <div className="max-w-4xl px-2 md:px-0">
          <SplitText
            text={"Product Designer, UI/UX Designer & Frontend Developer"}
            className="text-2xl md:text-6xl font-bold flex flex-wrap items-center justify-center gap-1 md:gap-2"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            tag="p"
          />
        </div>
        <p className="text-sm md:text-xl text-white/70 px-4 max-w-2xl leading-relaxed">
          Crafting intuitive product experiences and translating design into
          high-quality web interfaces.
        </p>
        <button
          onClick={handleScrollToContact}
          className="
px-5 md:px-[1.2em] 
py-2.5 md:py-[0.4em] 
bg-size-[100%_auto] 
bg-[linear-gradient(30deg,#0400ff,#4ce3f7)] 
rounded-xl md:rounded-[20px] 
text-white 
  text-base md:text-xl
  font-semibold
  font-inherit 
  border-none 
  transition-all 
  duration-500
  hover:bg-size-[200%_auto] 
  hover:bg-right 
  hover:animate-button-pulse"
        >
          Contact me
        </button>
      </div>
    </SectionWrapper>
  );
}
