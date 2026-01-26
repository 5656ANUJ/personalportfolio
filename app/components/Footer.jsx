import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center text-white/40 text-sm relative z-20 border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <p>&copy; {new Date().getFullYear()} Anuj Dekate. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
