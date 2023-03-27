import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

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
            <a className="text-white font-bold text-4xl cursor-pointer breathe-ease-logo">
              Breathe-ease
            </a>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-white p-2 rounded flex items-center transition duration-300 ease-in-out relative hover:underline"
            >
              <span className="hidden sm:inline-block">
                Breathing Methods
              </span>
              <FaBars className="h-5 w-5 sm:hidden text-white" />
              <span className="absolute bottom-0 left-0 h-1 w-full bg-white transform scale-x-0 origin-left transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
            </button>
            <CSSTransition
              in={dropdownOpen}
              timeout={300}
              classNames="dropdown"
              unmountOnExit
            >
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md py-1 z-10">
                <ul>
                  <li className="p-2 hover:bg-gray-200 transition duration-200 ease-in whitespace-nowrap">
                    <Link href="/four-seven-eight" passHref>
                      4-7-8 Breath
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 transition duration-200 ease-in whitespace-nowrap">
                    <Link href="/four-four-four" passHref>
                      4-4-4 Box Breath
                    </Link>
                  </li>
                </ul>
              </div>
            </CSSTransition>
          </div>
        </div>
      </nav>
      <style jsx global>{`
        .dropdown-enter {
          opacity: 0;
          transform: scale(0.9);
        }
        .dropdown-enter-active {
          opacity: 1;
          transform: scale(1);
          transition: opacity 300ms, transform 300ms;
        }
        .dropdown-exit {
          opacity: 1;
          transform: scale(1);
        }
        .dropdown-exit-active {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>
    </section>
  );
};

export default Nav;
