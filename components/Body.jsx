import React from "react";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";

const Body = () => {
  const router = useRouter();

  const navigateToExercise = (path) => {
    router.push(path);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
      <div
        className="group bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative"
        onClick={() => navigateToExercise("/four-seven-eight")}
      >
        <h2 className="text-2xl mb-4 text-black">4-7-8 Breath</h2>
        <p className="text-gray-600 group-hover:text-black transition-colors duration-300">
          The 4-7-8 breathing technique, also known as “relaxing breath,”
          involves breathing in for 4 seconds, holding the breath for 7 seconds,
          and exhaling for 8 seconds.
        </p>
        <FiArrowRight
          className="absolute bottom-4 right-4 text-gray-400 group-hover:text-black transition-colors duration-300"
          size={24}
        />
      </div>
      <div
        className="group bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative"
        onClick={() => navigateToExercise("/four-four-four")}
      >
        <h2 className="text-2xl mb-4 text-black">4-4-4-4 Box Breath</h2>
        <p className="text-gray-600 group-hover:text-black transition-colors duration-300">
          The 4-4-4-4 breathing technique involves inhaling for 4 seconds,
          holding the breath for 4 seconds, exhaling for 4 seconds and holding
          the breath for 4 seconds.
        </p>
        <FiArrowRight
          className="absolute bottom-4 right-4 text-gray-400 group-hover:text-black transition-colors duration-300"
          size={24}
        />
      </div>
    </div>
  );
};

export default Body;
