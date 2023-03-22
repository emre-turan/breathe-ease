import React, { useState } from "react";
import FourSevenEightInfo from "./FourSevenEightInfo";
import FourFourFourFourInfo from "./FourFourFourInfo";

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
    content = <FourFourFourFourInfo />;
  }

  return (
    <div>
      <button onClick={toggleCard}>{title}</button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default InfoCard;
