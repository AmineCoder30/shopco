import React from "react";
import {
  FaStar,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import badge from "../../assets/badge.png";
import badge1 from "../../assets/badge-1.png";
import badge2 from "../../assets/badge-2.png";
import badge3 from "../../assets/badge-3.png";
import badge4 from "../../assets/badge-4.png";
import logo from "../../assets/SHOP.CO.svg";
import { Title, InputField, Button } from "../ui";

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-20 mt-40 ">
      <div className="bg-black text-left -mt-40 text-white p-6 rounded-xl  container mx-auto mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <Title
          title={`STAY UP TO DATE ABOUT ${(<br />)} OUR LATEST OFFERS`}
          classes="text-left"
        />
        <div className="max-w-xl ">
          <InputField
            placeholder="enter your email adress"
            icon={<FaEnvelope color="gray" />}
            classes="bg-white flex"
          />
          <Button
            title=" Subscribe to Newsletter"
            classes="bg-white text-black w-full hover:bg-gray-200 mt-4"
          />
        </div>
      </div>
      <div className="max-w-6xl py-10 mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
        <div>
          <img src={logo} alt="logo" className="w-20" />
          <p className="text-sm mt-2">
            We have clothes that suit your style and which you're proud to wear.
            From women to men.
          </p>
          <ul className="flex gap-3 mt-3">
            <li className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-full p-1">
              <FaTwitter className="text-lg" />
            </li>
            <li className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-full p-1">
              {" "}
              <FaFacebookF className="text-lg" />
            </li>
            <li className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-full p-1">
              <FaInstagram className="text-lg" />
            </li>
            <li className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-full p-1">
              {" "}
              <FaPinterest className="text-lg" />
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">COMPANY</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">HELP</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">RESOURCES</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row border-t px-5 border-gray-200 items-center text-sm text-gray-500 py-1">
        <p>by Amine Mohamed © 2025, All Rights Reserved</p>
        <div className="flex  justify-center gap-1 mt-4">
          <img src={badge} alt="paypal" />
          <img src={badge1} alt="paypal" />
          <img src={badge2} alt="paypal" />
          <img src={badge3} alt="paypal" />
          <img src={badge4} alt="paypal" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
