"use client";

import SplitText from "../reactbits/Splittext";
export default function HeroSec() {
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-start gap-10 mt-20">
      <div
        className="
  inline-flex h-8.5 items-center justify-end rounded-3xl 
  pt-1.25 pr-8 pb-1.25 pl-9
  bg-[#1A1A1A] [background-blend-mode:plus-lighter]
  backdrop-blur-[6px]
  shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.5),inset_2px_2px_1px_-2px_#B3B3B3,inset_-2px_-2px_1px_-2px_#B3B3B3,inset_0_0_0_1px_#999,inset_0_0_22px_0_rgba(242,242,242,0.5)]
"
      >
        <h1>Hello! I'm Anuj</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <SplitText
          text={"Product Designer, UI/UX Designer & Frontend Developer"}
          className="text-6xl font-bold flex flex-col items-center justify-center gap-2 px-32"
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
        <p className="text-xl">
          Crafting intuitive product experiences and translating design into
          high-quality web interfaces.
        </p>
        <button onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
          className="
px-[1.5em] 
py-[0.4em] 
bg-size-[100%_auto] 
bg-[linear-gradient(30deg,#0400ff,#4ce3f7)] 
rounded-[20px] 
text-white 
  text-xl
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
    </div>
  );
}
