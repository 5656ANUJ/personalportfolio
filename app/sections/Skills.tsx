"use client";
import SlidingLogoMarquee from "../reactbits/LogoMarque";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionWrapper from "../components/SectionWrapper";
import {
  faAws,
  faCss3,
  faDocker,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faPython,
  faReact,
  faSass,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  const logos = [
    {
      id: "logo1",
      content: <FontAwesomeIcon icon={faFigma} size="2xl" />,
    },
    {
      id: "logo2",
      content: <FontAwesomeIcon icon={faHtml5} size="2xl" />,
    },
    { id: "logo3", content: <FontAwesomeIcon icon={faCss3} size="2xl" /> },
    { id: "logo4", content: <FontAwesomeIcon icon={faJs} size="2xl" /> },
    { id: "logo5", content: <FontAwesomeIcon icon={faReact} size="2xl" /> },
    { id: "logo6", content: <FontAwesomeIcon icon={faNodeJs} size="2xl" /> },
    { id: "logo7", content: <FontAwesomeIcon icon={faGithub} size="2xl" /> },
    {
      id: "logo8",
      content: (
        <img
          src="https://img.icons8.com/ios/100/express-js.png"
          alt="express-js"
          className="invert w-15 h-15 -translate-y-1.2"
        />
      ),
    },
    {
      id: "logo8",
      content: (
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png"
          alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo"
          className="invert w-15 h-15 -translate-y-1.2"
        />
      ),
    },
    {
      id: "logo9",
      content: (
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/ios-filled/100/typescript.png"
          alt="typescript"
          className="invert w-15 h-15 -translate-y-1.2"
        />
      ),
    },
    { id: "logo12", content: <FontAwesomeIcon icon={faGitAlt} size="2xl" /> },
  ];
  return (
    <SectionWrapper id="skills" className="py-12 md:py-20">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 md:mb-10 text-white px-4">
        Skills
      </h2>
      <SlidingLogoMarquee
        items={logos}
        speed={20}
        height="120px"
        enableBlur={true}
        blurIntensity={2}
        pauseOnHover={true}
        showGridBackground={true}
        onItemClick={(item) => console.log("Clicked:", item.id)}
      />
    </SectionWrapper>
  );
}
