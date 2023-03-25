import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-cyan-500 to-teal-500">
      <nav className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" passHref legacyBehavior>
            <a className="text-white font-bold text-3xl cursor-pointer breathe-ease-logo">
              Breathe-ease
            </a>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white p-2 rounded flex items-center transition duration-300 ease-in-out"
            >
              <span className="hidden sm:inline-block">
                Breathing Techniques
              </span>
              <FaBars className="h-5 w-5 sm:hidden text-white" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md py-1 z-10 transition duration-300 ease-in-out transform">
                <ul>
                  <li className="p-2 hover:bg-gray-200 transition duration-200 ease-in">
                    <Link href="/four-seven-eight" passHref>
                      4-7-8 Breathing
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 transition duration-200 ease-in">
                    <Link href="/four-four-four" passHref>
                      4-4-4 Box Breathing
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
