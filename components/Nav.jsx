import React from "react";

const Nav = ({ selectedBreathingTechnique, handleTechniqueChange }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          {/* Uygulama logosunu buraya ekleyin */}
          Breathe-ease
        </div>
        <div>
          <select
            value={selectedBreathingTechnique}
            onChange={handleTechniqueChange}
            className="bg-gray-700 text-white p-2 rounded"
          >
            <option value="4-7-8">4-7-8 Breathe</option>
            <option value="4-4-4">4-4-4 Breathe</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
