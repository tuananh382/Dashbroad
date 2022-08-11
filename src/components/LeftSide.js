import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { BiHomeAlt } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "../components/style.css";

function LeftSide(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleLight = () => {
    const html = window.document.documentElement;
    html.classList.remove("dark");
    html.classList.add("light");
    localStorage.setItem("theme", "light");
  };
  const handleDark = () => {
    const html = window.document.documentElement;
    html.classList.remove("light");
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };
  return (
    <section className="px-6 py-3 h-screen bg-[#fff] dark:bg-[#1b1d1f] w-1/5">
      <img className="w-10 mt-3 mb-10" src={logo} alt="" />
      <NavLink to="/">
        <div className="flex text-[#7c8187] dark:text-[#70767d] hover:text-[#000] dark:hover:text-[#fff] items-center mb-4 px-2 py-2 rounded-xl cursor-pointer hover:bg-[#F4F4F4] dark:hover:bg-[#282b2f] hover:shadow-bsd dark:hover:shadow-bsd">
          <BiHomeAlt className="text-24 mr-2 mb-1" />
          Home
        </div>
      </NavLink>
      <div
        className="flex items-center text-[#7c8187] mb-3 px-2 py-2 rounded-xl hover:text-[#000] hover:cursor-pointer hover:bg-[#F4F4F4] hover:shadow-bsd dark:text-[#70767d] dark:hover:bg-[#282b2f] dark:hover:shadow-bsd dark:hover:text-[#fff]"
        onClick={handleMenu}
      >
        <BiUserCircle className="text-24 mr-2 " />
        Customers
        <BsChevronDown className="ml-auto text-24 text-[#7a8086]" />
      </div>
      {openMenu && (
        <div>
          <NavLink to="/overview">
            <div className="mb-1 ml-8 px-2 py-2 text-[#7c8187] rounded-xl hover:text-[#000] hover:cursor-pointer hover:bg-[#F4F4F4] hover:shadow-bsd dark:text-[#70767d] dark:hover:bg-[#282b2f] dark:hover:shadow-bsd dark:hover:text-[#fff] ">
              -Overview
            </div>
          </NavLink>
          <NavLink to="/customer-list">
            <div className="flex items-center text-[#7c8187] ml-8 px-2 py-2 rounded-xl hover:text-[#000] hover:cursor-pointer hover:bg-[#F4F4F4] hover:shadow-bsd dark:text-[#70767d] dark:hover:bg-[#282b2f] dark:hover:shadow-bsd dark:hover:text-[#fff]">
              -Customer list
              {/* <AiOutlineRight className="ml-auto text-24 text-[#7a8086]" /> */}
            </div>
          </NavLink>
        </div>
      )}
      <div className="absolute bottom-4">
        <hr className="dark:opacity-20" />
        <div className="flex mt-7 ml-2 dark:text-[#70767d] text-[#7c8187]">
          <AiOutlineQuestionCircle className=" mr-4 text-20 dark:text-[#70767d]" />
          Help & getting started
        </div>
        <div className="flex mt-7 bg-[#F4F4F4] rounded-3xl w-[240px] dark:bg-black">
          <div
            className="flex ml-1 mt-1 mb-1 w-[115px] h-[30px] py-2 justify-center bg-[#fff] cursor-pointer rounded-3xl items-center dark:bg-black dark:hover:bg-[#282b30] dark:text-[#70767d] dark:hover:text-[#fff]"
            onClick={handleLight}
          >
            <BsFillSunFill className="mr-1" />
            Light
          </div>
          <div
            className="flex mt-1 text-[#7c8187] mt-1 mb-1 w-[115px] h-[30px] py-2 justify-center hover:text-[#000] hover:bg-[#fff] cursor-pointer rounded-3xl items-center dark:bg-[#282b30]  dark:text-[#fff]"
            onClick={handleDark}
          >
            <BiMoon className="mr-1" />
            Dark
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSide;
