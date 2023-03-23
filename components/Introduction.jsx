import React from "react";
import { motion } from "framer-motion";

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
    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-12 shadow-md mb-5-6 ">
      <motion.h1
        className="text-center text-4xl font-bold mb-8 text-white"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        Welcome to Breathe-Ease
      </motion.h1>
      <motion.p
        className="text-center text-xl mb-6 leading-8 text-white"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        Breathe-Ease is a web application that helps you practice different
        breathing techniques to relax and reduce stress.
      </motion.p>
    </div>
  );
};

export default Introduction;
