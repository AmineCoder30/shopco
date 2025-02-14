import React from "react";

import formal from "../../assets/products/formal.png";
import casual from "../../assets/products/casual.png";
import party from "../../assets/products/party.png";
import gym from "../../assets/products/gym.png";
import { Title } from "../ui";
const dressStyles = [
  {
    name: "Casual",
    image: casual,
    grid: "col-span-5 md:col-span-2",
  },
  {
    name: "Formal",
    image: formal,
    grid: "col-span-5 md:col-span-3",
  },
  {
    name: "Party",
    image: party,
    grid: "col-span-5 md:col-span-3",
  },
  { name: "Gym", image: gym, grid: "col-span-5 md:col-span-2" },
];

const DressStyleGrid = () => {
  return (
    <div className="px-5 py-20 bg-gray-100 rounded-xl container mx-auto">
      <Title title="Browse by Dress Style" />

      <div className="grid grid-cols-5 gap-4">
        {dressStyles.map((style, index) => (
          <div
            key={index}
            className={`relative h-64  bg-white rounded-lg overflow-hidden shadow-md ${style.grid}`}
          >
            <img
              src={style.image}
              alt={style.name}
              className="w-full h-full  object-cover opacity-90"
            />
            <div className="absolute inset-0 p-10 bg-transparent ">
              <span className="text-black font-semibold text-lg">
                {style.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DressStyleGrid;
