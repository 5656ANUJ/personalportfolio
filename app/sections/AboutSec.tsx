export default function AboutSec() {
  return (
    <section className="w-full h-screen flex items-center justify-center gap-10  px-30">
      <div>
        <img
          className="w-full h-full object-cover "
          src="https://framerusercontent.com/images/lpzHMGI6fqkXruZWBeST07brk.jpg?width=1200&height=1600"
          alt=""
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-5">
        <div className="inline-flex h-8.5 items-center justify-end rounded-3xl pt-1.25 pr-8 pb-1.25 pl-9.5 bg-[#1A1A1A] [background-blend-mode:plus-lighter] backdrop-blur-[6px] shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.5),inset_2px_2px_1px_-2px_#B3B3B3,inset_-2px_-2px_1px_-2px_#B3B3B3,inset_0_0_0_1px_#999,inset_0_0_22px_0_rgba(242,242,242,0.5)]">
          <span>About</span>
        </div>

        <div className="text-4xl font-semibold">
          Solving real problems with purposeful, user-first design
        </div>
        <div>
          <p className="text-white/70 text-lg leading-relaxed">
            I’m a UI/UX and product designer with a strong frontend background,
            focused on creating meaningful digital experiences that solve real
            user problems. I enjoy working from early ideas and wireframes
            through to clean, responsive frontend implementation.
          </p>
        </div>

        <div>
          <p className="text-white/70 text-lg leading-relaxed">
            I believe good design goes beyond visuals. It’s about understanding
            users, simplifying decisions, and building interfaces that feel
            natural to use. By combining design and development, I ensure every
            product decision translates smoothly into real-world execution.
          </p>
        </div>

        <button
          className="
           w-fit px-10 py-4 rounded-full
          bg-lime-400 text-black font-semibold
          hover:scale-105 transition-transform
          shadow-[0_0_30px_rgba(163,230,53,0.6)]
        "
        >
          View Resume
        </button>
      </div>
    </section>
  );
}
