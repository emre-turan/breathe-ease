import React from "react";
import Image from "next/image";

const BuyMeACoffee = () => {
  return (
    <div className="text-center mt-10 mb-5">
      <a href="https://www.buymeacoffee.com/emreturann" target="_blank">
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
