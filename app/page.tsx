import Navbar from "./components/Navbar";
import HeroSec from "./sections/HeroSec";
import CircularText from "./reactbits/CircularText";
import ProjectSec from "./sections/ProjectSec";
import TextScrollMarquee from "./reactbits/textmarque";
import AboutSec from "./sections/AboutSec";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import ContactSec from "./sections/ContactSec";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSec />
      <section className="mt-20"><CircularText text="*UI/UX Designer* *Frontend Developer* " /></section>
      <ProjectSec />
      <section className=" flex items-center justify-center mt-25">
        <div className="w-[80%] mask-[linear-gradient(to_left,transparent,black_20%,black_80%,transparent)]">
          <TextScrollMarquee
            text="  UI Designer   UX Research   Product Design   visual Design  "
            baseVelocity={2}
            scrollDependent={true}
            delay={0}
            direction="left"
          />
        </div>
      </section>
      <AboutSec />
      <Skills />
      <Experience />
      <ContactSec />
      <Footer />
    </>
  );
}
