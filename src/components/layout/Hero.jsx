import React from "react";
import hero from "../../assets/hero.png";
import star from "../../assets/star.svg";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full hero  pt-20 pb-0 md:pb-20  bg-gray-100">
      <div className=" container mx-auto flex flex-col gap-10  md:flex-row items-center justify-between  ">
        <div className="px-5">
          <h1 className="text-5xl font-extrabold leading-tight candal">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="mt-4 max-w-96 text-gray-600">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button
            title=" Shop Now"
            handleClick={() => navigate("categories/formal")}
            classes="bg-black text-white mt-4"
          />

          <div className="mt-8  space-x-10 text-center md:text-left flex justify-center md:justify-between flex-wrap md:flex-nowrap">
            <div className="border-r mt-5 pr-4 border-gray-300">
              <p className="text-3xl font-bold">200+</p>
              <p className="text-gray-600 text-xs">International Brands</p>
            </div>
            <div className="border-r mt-5 pr-4 border-gray-300">
              <p className="text-3xl font-bold">2,000+</p>
              <p className="text-gray-600 text-xs">High-Quality Products</p>
            </div>
            <div className=" mt-5">
              <p className="text-3xl font-bold">30,000+</p>
              <p className="text-gray-600 text-xs">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:min-h-[400px] relative">
          <img
            src={star}
            alt="star"
            className="absolute md:hidden xl:block top-0 right-10 h-20"
          />
          <img
            src={star}
            alt="star"
            className="absolute top-[20%] left-20 h-14 md:hidden xl:block"
          />
          <img src={hero} alt="Fashion models" className="w-full md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
