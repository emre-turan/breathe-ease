import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Replace the src and alt attributes with your developer logo */}
          <Image
            src="/emre-logo-dark.svg"
            alt="Your Developer Logo"
            width={150}
            height={150}
            className="mr-2"
          />
         
        </div>
        <div>
          {/* Placeholder for your social media accounts */}
          {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a> */}
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
