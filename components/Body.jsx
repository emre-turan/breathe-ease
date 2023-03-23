import React from "react";
import { useRouter } from "next/router";

const Body = () => {
  const router = useRouter();

  const navigateToExercise = (path) => {
    router.push(path);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
      <div
        className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
        onClick={() => navigateToExercise("/four-seven-eight")}
      >
        <h2 className="text-2xl font-bold mb-4">4-7-8 Breathing Technique</h2>
        <p className="text-gray-700 text-lg">
          The 4-7-8 breathing technique, also known as “relaxing breath,”
          involves breathing in for 4 seconds, holding the breath for 7 seconds,
          and exhaling for 8 seconds.
        </p>
      </div>
      <div
        className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
        onClick={() => navigateToExercise("/four-four-four")}
      >
        <h2 className="text-2xl font-bold mb-4">4-4-4 Breathing Technique</h2>
        <p className="text-gray-700 text-lg">
          The 4-4-4 breathing technique involves inhaling for 4 seconds, holding
          the breath for 4 seconds, and exhaling for 4 seconds.
        </p>
      </div>
    </div>
  );
};

export default Body;
