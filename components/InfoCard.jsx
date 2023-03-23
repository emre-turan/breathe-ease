import React, { useState } from "react";
import FourSevenEightInfo from "./FourSevenEightInfo";
import FourFourFourInfo from "./FourFourFourInfo";

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
    <div>
      <button onClick={toggleCard} className="bg-blue-500 text-white px-3 py-2 rounded">
        {title}
      </button>
      {isOpen && <div className="bg-white p-4 mt-4 rounded shadow">{content}</div>}
    </div>
  );
};

export default InfoCard;
