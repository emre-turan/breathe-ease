import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4 gap-4">
          <a
            href="https://www.linkedin.com/in/emre-turan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl mx-2 transition-all duration-300 transform hover:scale-110 hover:text-blue-500" />
          </a>
          <a
            href="https://github.com/etdesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl sm:text-3xl md:text-4xl mx-2 transition-all duration-300 transform hover:scale-110 hover:text-gray-400" />
          </a>
          <a
            href="https://www.instagram.com/jiwa.music/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl sm:text-3xl md:text-4xl mx-2 transition-all duration-300 transform hover:scale-110 hover:text-pink-500" />
          </a>
        </div>
        <div className="flex items-center">
          <Image
            src="/emre-logo-dark.svg"
            alt="Your Developer Logo"
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
