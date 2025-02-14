import React, { useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { MdSearch, MdMenu } from "react-icons/md";
import { InputField } from "../ui";
import logo from "../../assets/SHOP.CO.svg";
import { Link } from "react-router-dom";
function Header() {
  const [showmenu, setShowMenu] = useState(false);
  const links = ["casual", "formal", "sport", "party"];
  return (
    <div className="w-full h-16 fixed top-0 left-0 z-50 bg-white">
      <nav className="flex relative container mx-auto items-center justify-between gap-10 px-6 py-3 ">
        <div className="flex items-center gap-1">
          <button
            className="block md:hidden cursor-pointer"
            onClick={() => setShowMenu(!showmenu)}
          >
            <MdMenu size={26} />
          </button>
          <Link to="/">
            <img src={logo} alt="shop.co logo" className="w-32" />
          </Link>
        </div>
        <div
          className={` bg-white py-5 md:py-0 h-screen md:h-fit z-50 absolute gap-10 md:gap-5 items-center flex-col md:flex-row ${
            !showmenu ? " hidden md:flex " : " flex "
          }  md:static top-16 left-0 w-full md:w-fit space-x-6`}
        >
          {links.map((link) => (
            <Link
              to={`/categories/${link}`}
              onClick={() => setShowMenu(false)}
              className="hover:text-gray-600 mr-0 capitalize"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="flex lg:flex-1 items-center space-x-4">
          <InputField
            icon={<MdSearch size={24} color="gray" />}
            classes="hidden lg:flex"
          />
          <Link to="/cart">
            <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-600" />
          </Link>
          <FaUserCircle className="text-xl cursor-pointer hover:text-gray-600" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
