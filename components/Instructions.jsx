import React from "react";

const Instructions = () => {
  return (
    <div className="shadow-lg p-10 rounded-xl my-10">
      <h2 className="text-center text-3xl mb-6">Instructions</h2>
      <ol className="list-decimal list-inside mb-6 text-center">
        <li className="mb-2">
          Use the navigation bar at the top of the page to select a breathing
          technique.
        </li>
        <li className="mb-2">
          Follow the on-screen instructions for the selected technique.
        </li>
        <li className="mb-2">
          Practice regularly for the best results in reducing stress and
          increasing relaxation.
        </li>
      </ol>
    </div>
  );
};

export default Instructions;
