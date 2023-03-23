import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref legacyBehavior>
          <a className="text-white font-bold text-xl cursor-pointer">
            {/* Add your application logo here */}
            Breathe-ease
          </a>
        </Link>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-700 text-white p-2 rounded"
          >
            Breathing Techniques
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md">
              <ul>
                <li className="p-2">
                  <Link href="/four-seven-eight" passHref legacyBehavior>
                    <a>4-7-8 Breathing</a>
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/four-four-four" passHref legacyBehavior  >
                    <a>4-4-4 Box Breathing</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
