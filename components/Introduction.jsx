import React from "react";
import { motion as m } from "framer-motion";
import RotatingText from "react-rotating-text";

const Introduction = () => {
  const fadeInUp = {
    initial: {
      y: 40,
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-12 shadow-md w-full h-96 flex flex-col justify-center items-center">
      <m.h1
        className="text-center text-5xl font-bold mb-8 text-white"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        Practice to{" "}
        <RotatingText
          items={["reduce anxiety", "reduce stress", "relax body", "relax mind"]}
        />
      </m.h1>
      <m.p
        className="text-center text-lg mb-6 leading-8 text-white"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        Breathe-Ease is a web application that helps you practice different
        breathing methods to relax and reduce stress.
      </m.p>
    </div>
  );
};

export default Introduction;
