"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  const Navlinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "" },
    { name: "Project", link: "/project" },
    { name: "Experience", link: "/experience" },
    { name: "Resume", link: "/resume" },
  ];

  const TextScrollLink = ({ name, href }) => {
    return (
      <Link href={href} className="group relative block overflow-hidden h-6">``
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
      </Link>
    );
  };
  return (
    <div className="flex items-center justify-center mt-5">
      <div
        className='
    w-[80%] 
    h-16 
    rounded-[20px] 
    border border-[#404040]/50 
    bg-white/10 
    backdrop-blur-[12.5px] 
    shadow-[-20px_68px_20px_0px_rgba(0,0,0,0),-13px_43px_18px_0px_rgba(0,0,0,0.01),-7px_24px_15px_0px_rgba(0,0,0,0.04),-3px_11px_11px_0px_rgba(0,0,0,0.07),-1px_3px_6px_0px_rgba(0,0,0,0.08)] flex items-center justify-between px-10 
">'
      >
        <div className="font-semibold text-2xl">Anuj Dekate</div>
        <motion.div>
          <ul className="flex items-center justify-center gap-10 ">
            {Navlinks.map((link, index) => {
              return (
                <TextScrollLink name={link.name} href={link.link} key={index} />
              );
            })}
            <li>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="
px-[1.5em] 
py-[0.3em] 
bg-size-[100%_auto] 
bg-[linear-gradient(30deg,#0400ff,#4ce3f7)] 
rounded-[20px] 
text-white 
  text-md
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
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
