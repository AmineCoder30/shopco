import React from "react";

function SizeButton({ sizes }) {
  const [currentSize, setCurrentSize] = React.useState("Large");
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size, index) => {
        return (
          <button
            onClick={() => setCurrentSize(size)}
            id={index}
            className={`py-2 px-3 text-xs rounded-full cursor-pointer ${
              size === currentSize
                ? "text-white bg-black"
                : "bg-gray-200 text-gray-500"
            }  hover:text-white hover:bg-black `}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}

export default SizeButton;
