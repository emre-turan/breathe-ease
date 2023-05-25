import React from "react";
import Fade from "react-reveal/Fade";

const Instructions = () => {
  return (
    <Fade bottom>
      <div className="group shadow-lg p-10 rounded-xl my-10 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <h2 className="text-center text-2xl mb-6 text-black">Instructions</h2>
        <ol className="list-decimal list-inside mb-6 flex flex-col justify-center w-full h-full xl:ml-60 lg:ml-24">
          <li className="mb-2 text-gray-600 transition-colors duration-300 group-hover:text-black">
            Use the navigation bar at the top of the page or the links below to
            select a breathing methods.
          </li>
          <li className="mb-2 text-gray-600 transition-colors duration-300 group-hover:text-black ">
            Follow the on-screen instructions
          </li>
          <li className="mb-2 text-gray-600 transition-colors duration-300 group-hover:text-black">
            Practice regularly for the best results in reducing stress and
            increasing relaxation.
          </li>
        </ol>
      </div>
    </Fade>
  );
};

export default Instructions;
