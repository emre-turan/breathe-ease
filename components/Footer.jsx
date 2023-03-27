import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/emre-turan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl mx-2 transition-all duration-300 transform hover:scale-110 hover:text-blue-800" />
          </a>
          <a
            href="https://github.com/etdesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl sm:text-3xl md:text-4xl mx-2 transition-all duration-300 transform hover:scale-110 hover:text-gray-800" />
          </a>
        </div>
        <div className="flex items-center">
          <Image
            src="/emre-logo-dark.svg"
            alt="Emre Turan Developer Brand Logo"
            width={125}
            height={125}
            className="mr-2"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
