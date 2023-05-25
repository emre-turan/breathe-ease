import React, { useState, useEffect } from "react";
import RotatingText from "react-rotating-text";
import Fade from "react-reveal/Fade";

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
      <Fade bottom>
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-white font-light tracking-wide">
          Practice to{" "}
          {isMounted ? (
            <span className="font-semibold">
              <RotatingText items={rotatingItems} />
            </span>
          ) : (
            <span className="font-semibold">{rotatingItems[1]}</span>
          )}
        </h1>
      </Fade>
      <Fade bottom>
        <p className="text-center text-lg sm:text-lg md:text-xl lg:text-2xl mb-6 font-light leading-8 text-white mt-16 tracking-wide">
          Breathe-Ease is a web application that helps you practice different
          breathing methods to relax and reduce stress.
        </p>
      </Fade>
    </div>
  );
};

export default Introduction;
