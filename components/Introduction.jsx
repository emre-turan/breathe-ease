import React, { useState, useEffect } from "react";
import RotatingText from "react-rotating-text";

const Introduction = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const rotatingItems = [
    "reduce anxiety",
    "reduce stress",
    "relax body",
    "relax mind",
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-12 shadow-md w-full h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-white font-light tracking-wide">
        Practice to{" "}
        {isMounted ? (
          <span className="font-semibold">
            <RotatingText items={rotatingItems} />
          </span>
        ) : (
          <span className="font-semibold">{rotatingItems[1]}</span>
        )}
      </h1>

      <p className="text-center text-lg sm:text-lg md:text-xl lg:text-2xl mb-6 font-light leading-8 text-white mt-16 tracking-wide">
        Breathe-Ease is a web application that helps you practice different
        breathing methods to relax and reduce stress.
      </p>
    </div>
  );
};

export default Introduction;
