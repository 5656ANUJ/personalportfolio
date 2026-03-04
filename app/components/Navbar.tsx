"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const resumeLink =
    "https://docs.google.com/document/d/1Dnqimfj390AeQMrvs6_cmc2ywYx_Ma6JiPGfv70lPyk/edit?usp=sharing";
  const Navlinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (href === "resume") {
      window.open(resumeLink, "_blank");
      return;
    }
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const TextScrollLink = ({ name, href }) => {
    return (
      <a
        href={href}
        onClick={(e) => handleScroll(e, href)}
        className="group relative block overflow-hidden h-6 cursor-pointer"
      >
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -24 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col text-white/70 group-hover:text-[#4ce3f7]"
        >
          <span className="flex h-6 items-center text-md font-medium transition-all">
            {name}
          </span>
          <span className="flex h-6 items-center text-md font-bold">
            {name}
          </span>
        </motion.div>
      </a>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center mt-3 md:mt-5 px-3 md:px-4 w-full">
      <div
        className="
    w-full max-w-[95%] md:max-w-[80%]
    h-14 md:h-16
    rounded-2xl md:rounded-[20px]
    border border-[#404040]/50 
    bg-[#1A1A1A]/80
    backdrop-blur-[12.5px] 
    shadow-lg flex items-center justify-between px-4 md:px-10 
"
      >
        <div className="font-semibold text-lg md:text-2xl text-white">
          Anuj Dekate
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-6 lg:gap-8">
            {Navlinks.map((link, index) => (
              <li key={index}>
                <TextScrollLink name={link.name} href={link.link} />
              </li>
            ))}
            <li>
              <div
                onClick={() => window.open(resumeLink, "_blank")}
                className="cursor-pointer group relative block overflow-hidden h-6 text-white/70 hover:text-[#4ce3f7] font-medium transition-colors"
              >
                Resume
              </div>
            </li>
            <li>
              <button
                onClick={(e) => handleScroll(e, "#contact")}
                className="
px-4 md:px-[1.2em] 
py-2 md:py-[0.3em] 
bg-size-[100%_auto] 
bg-[linear-gradient(30deg,#0400ff,#4ce3f7)] 
rounded-xl md:rounded-[20px] 
text-white 
  text-sm md:text-md
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
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 w-[95%] max-w-[400px] bg-[#1A1A1A] border border-[#404040]/50 rounded-2xl p-5 flex flex-col gap-3 shadow-2xl md:hidden"
          >
            {Navlinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                onClick={(e) => handleScroll(e, link.link)}
                className="text-white/80 text-base font-medium hover:text-[#4ce3f7] transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              onClick={() => window.open(resumeLink, "_blank")}
              className="text-white/80 text-base font-medium hover:text-[#4ce3f7] transition-colors cursor-pointer py-2"
            >
              Resume
            </a>
            <button
              onClick={(e) => handleScroll(e, "#contact")}
              className="mt-2 w-full py-3 bg-[linear-gradient(30deg,#0400ff,#4ce3f7)] rounded-xl text-white font-semibold"
            >
              Contact me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
