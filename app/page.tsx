import Navbar from "./components/Navbar";
import HeroSec from "./sections/HeroSec";
import FeaturedProjects from "./sections/FeaturedProjects";
import AboutSec from "./sections/AboutSec";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import ContactSec from "./sections/ContactSec";
import Footer from "./components/Footer";
import InteractiveCodeBackground from "./components/InteractiveCodeBackground";
import SplineWrapper from "./components/SplineWrapper";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSec />
      <section className="mt-10 sm:mt-20 w-full h-[400px] sm:h-[600px] flex items-center justify-center relative overflow-hidden">
        <InteractiveCodeBackground />

        {/* <CircularText text="*UI/UX Designer* *Frontend Developer* " />
      </section>
      <section className=" flex items-center justify-center mt-25">
        <div className="w-[80%] mask-[linear-gradient(to_left,transparent,black_20%,black_80%,transparent)]">
          <TextScrollMarquee
            text="  UI Designer   UX Research   Product Design   visual Design  "
            baseVelocity={2}
            scrollDependent={true}
            delay={0}
            direction="left"
          />
        </div> */}
        <div className="relative z-10 w-full h-full pointer-events-auto">
          <SplineWrapper />
        </div>
      </section>
      <FeaturedProjects />
      <AboutSec />
      <Skills />
      <Experience />
      <ContactSec />
      <Footer />
    </>
  );
}
