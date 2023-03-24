import React from "react";

const Instructions = () => {
  return (
    <div className="group shadow-lg p-10 rounded-xl my-10 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-center text-3xl mb-6 text-black">
        Instructions
      </h2>
      <ol className="list-decimal list-inside mb-6 text-center">
        <li className="mb-2 text-gray-600 transition-colors duration-300 group-hover:text-black">
          Use the navigation bar at the top of the page to select a breathing
          technique.
        </li>
        <li className="mb-2 text-gray-600 transition-colors duration-300 group-hover:text-black">
          Follow the on-screen instructions for the selected technique.
        </li>
        <li className="mb-2 text-gray-600 transition-colors duration-300 group-hover:text-black">
          Practice regularly for the best results in reducing stress and
          increasing relaxation.
        </li>
      </ol>
    </div>
  );
};

export default Instructions;
