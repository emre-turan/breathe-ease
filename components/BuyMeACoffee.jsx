import React from "react";
import Image from "next/image";

const BuyMeACoffee = () => {
  return (
    <div className="text-center mt-10 mb-5 flex justify-center ">
      <a
        href="https://www.buymeacoffee.com/emreturann"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      >
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          width={217}
          height={60}
        />
      </a>
    </div>
  );
};

export default BuyMeACoffee;
