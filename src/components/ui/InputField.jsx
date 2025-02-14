import React from "react";

function InputField({ icon, placeholder, classes }) {
  return (
    <div
      className={`  gap-2 items-center flex-1 px-3 ${
        classes ? classes : "bg-gray-100"
      }  text-gray-600 rounded-full outline-none focus:ring-2 `}
    >
      {icon}
      <input
        type="text"
        placeholder={placeholder ? placeholder : "Search for products..."}
        className=" py-2   focus:outline-none focus:border-none"
      />
    </div>
  );
}

export default InputField;
