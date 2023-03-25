import React, { useState } from "react";
import FourSevenEightInfo from "./FourSevenEightInfo";
import FourFourFourInfo from "./FourFourFourInfo";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const InfoCard = ({ technique }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  let title, content;
  if (technique === "4-7-8") {
    title = "What is the 4-7-8 Breathing Technique?";
    content = <FourSevenEightInfo />;
  } else if (technique === "4-4-4") {
    title = "What is the 4-4-4-4 Breathing Technique?";
    content = <FourFourFourInfo />;
  }

  return (
    <div className="w-full sm:w-3/4 md:w-2/3  mx-auto my-10 p-6 rounded-lg shadow-md bg-white">
      <div
        className="cursor-pointer flex items-center justify-between"
        onClick={toggleCard}
      >
        <h2 className="text-xl font-semibold mb-4 text-cyan-800">
          {title}
        </h2>
        {isOpen ? (
          <FiChevronUp className="text-3xl text-cyan-600" />
        ) : (
          <FiChevronDown className="text-3xl text-cyan-600" />
        )}
      </div>
      {isOpen && (
        <div className="transition-all duration-500 ease-in-out mt-4">
          {content}
        </div>
      )}
    </div>
  );
};

export default InfoCard;
