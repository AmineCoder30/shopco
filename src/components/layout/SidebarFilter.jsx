import { useState } from "react";

import cross from "../../assets/cross.svg";
import { BsChevronDown, BsCheck } from "react-icons/bs";
import { SizeButton, ColorsList } from "../ui";
const SidebarFilter = ({ showSideBar, setshowSideBar }) => {
  const [price, setPrice] = useState([50, 1000]);

  const [active, setActive] = useState("color");

  const colors = [
    "green",
    "red",
    "yellow",
    "orange",
    "pink",
    "blue",
    "black",
    "white",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  return (
    <div
      className={`w-full ${
        showSideBar ? "translate-x-0" : "-translate-x-1000 md:translate-x-0"
      } md:w-64 transition-all duration-300  h-fit fixed z-10 md:sticky top-16 md:top-0 left-0 bg-white p-4 border border-gray-200 rounded-xl`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Filters</h2>
        <img
          src={cross}
          alt="hide sidebar"
          className="h-3 w-3 cursor-pointer md:hidden"
          onClick={() => setshowSideBar(false)}
        />
      </div>

      {/* Categories */}
      <div className="py-3  border-b border-gray-200">
        {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((item) => (
          <div
            key={item}
            className=" text-gray-600 p-2 transition-all duration-300 rounded-md cursor-pointer hover:bg-black  hover:text-white"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mt-4 pb-4 border-b border-gray-200">
        <div className="flex justify-between  ">
          <h3 className="font-semibold">Price</h3>
          <BsChevronDown
            onClick={() => setActive("price")}
            className="text-gray-500 cursor-pointer"
          />
        </div>
        <div
          className={`${
            active === "price" ? "max-h-screen" : "max-h-0"
          } translation-all duration-500 overflow-hidden`}
        >
          <input
            type="range"
            min="50"
            max="1000"
            value={price[0]}
            onChange={(e) => setPrice([e.target.value, price[1]])}
            className="w-full mt-2 accent-black"
          />

          <div className="flex justify-between text-sm text-gray-600">
            <span>${price[0]}</span> <span>${price[1]}</span>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="mt-4  border-b border-gray-200">
        <div className="flex justify-between  ">
          <h3 className="font-semibold">Colors</h3>
          <BsChevronDown
            onClick={() => setActive("color")}
            className="text-gray-500 cursor-pointer"
          />
        </div>
        <div
          className={`${
            active === "color" ? "max-h-screen" : "max-h-0"
          } translation-all duration-500 overflow-hidden`}
        >
          <ColorsList colors={colors} />
        </div>
      </div>

      {/* Size */}
      <div className="mt-4 pb-4 border-b border-gray-200">
        <div className="flex justify-between  ">
          <h3 className="font-semibold">Size</h3>
          <BsChevronDown
            onClick={() => setActive("size")}
            className="text-gray-500 cursor-pointer"
          />
        </div>
        <div
          className={`${
            active === "size" ? "max-h-screen" : "max-h-0"
          } translation-all duration-500 overflow-hidden`}
        >
          <SizeButton sizes={sizes} />
        </div>
      </div>

      {/* Dress Style */}
      <div className="mt-4 pb-4 border-b border-gray-200">
        <div className="flex justify-between  ">
          <h3 className="font-semibold">Dress Style</h3>
          <BsChevronDown
            onClick={() => setActive("style")}
            className="text-gray-500 cursor-pointer"
          />
        </div>
        <div
          className={`${
            active === "style" ? "max-h-screen" : "max-h-0"
          } translation-all duration-500 overflow-hidden`}
        >
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <div
              key={style}
              className=" p-2 transition-all rounded-md duration-300 text-gray-600 cursor-pointer  hover:bg-black  hover:text-white mt-2"
            >
              {style}
            </div>
          ))}
        </div>
      </div>

      {/* Apply Filter Button */}
      <button className="w-full mt-6 py-2 bg-black text-white rounded-lg">
        Apply Filter
      </button>
    </div>
  );
};

export default SidebarFilter;
