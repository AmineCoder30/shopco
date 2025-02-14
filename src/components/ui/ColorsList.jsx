import React from "react";

function ColorsList({ colors }) {
  const [selectedColor, setSelectedColor] = React.useState("olive");
  return (
    <div className="flex flex-wrap gap-2 mt-2 pb-4">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-6 h-6 cursor-pointer duration-300 transition-all hover:opacity-80 rounded-full border ${
            selectedColor === color ? "border-black" : "border-white"
          }`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </div>
  );
}

export default ColorsList;
