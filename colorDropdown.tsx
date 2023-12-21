'use client'

import React, { useState } from "react";

interface ColorDropdownProps {
  onSelectColor: (color: string) => void;
}

const ColorDropdown: React.FC<ColorDropdownProps> = ({ onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState("Any color");
  const colors = ["Any color", "Red", "Blue", "Black", "Purple"];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onSelectColor(color);
    // You can add additional logic here based on the selected color
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="bg-transparent text-white border-white rounded-lg px-4 py-1.5 border-2 focus:outline-none transition-all flex items-center justify-center space-x-2"
        >
          <span className="font-roboto">{selectedColor}</span>
          <i className="fa fa-chevron-down"></i>
        </button>
      </div>
      {/* Dropdown menu */}
      <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorDropdown;
