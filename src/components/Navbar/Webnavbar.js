import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import Mobilenavbar from "./Mobilenavbar";

// react icons
import { BsCart, BsSearch } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div>
      <nav className="shadow-3xl mb-0 sm:mb-10 h-20">
        <div className="flex items-center justify-between px-5 md:px-10 lg:px-20 py-2">
          <div className="flex items-center">
            {/* <div onClick={handleClick} className="">
              <button
                className="mr-6 cursor-pointer text-xl border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                type="button"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div> */}
            <div className=" m-auto font-bold text-center inline-block py-2 whitespace-nowrap">
              <Link to="/">
                <div>
                  <p className="font-['Montserrat'] font-normal">Bonnie's</p>{" "}
                  <p className="font-['Montserrat'] tracking-[.5em]">Flair</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="sm-icons flex space-x-5 items-center">
            <a href="tel:+2347063383263" target="_blank">
              <AiOutlinePhone />
            </a>
            <a href="https://instagram.com/bonniesflair_?igshid=YmMyMTA2M2Y=" target="_blank">
              <AiOutlineInstagram />
            </a>
            <a href="https://wa.me/message/72CDTLC5BZAOO1" target="_blank">
              <AiOutlineWhatsApp />
            </a>
            <a href="mailto:bonniesflair@gmail.com" target="_blank">
              <AiOutlineMail />
            </a>
          </div>
          {/* <ul className="flex basis-3/4 w-full justify-end items-center space-x-3 ml-auto list-none">
            <li className="nav-item">
              <form className="hidden sm:flex items-center space-x-3">
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <BsSearch />
                  </div>
                  <input
                    type="text"
                    className="border border-black text-[#A9B0B9] text-base lg:text-xl rounded-lg pl-10 p-3"
                    placeholder="Search Products, Brands, Categories"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex uppercase items-center py-3 px-4 text-base lg:text-xl font-medium text-white bg-[#051D4C] rounded-lg hover:bg-blue-900"
                >
                  Search
                </button>
              </form>
            </li>
            <li className="nav-item">
              <Dropdown />
            </li>
            <li className="nav-item flex items-center text-base lg:text-xl  hover:opacity-75">
              <Link to="/cart">
                <div className="flex items-center">
                  <span className="mr-2">
                    <BsCart />
                  </span>
                  <span className="hidden md:flex">Cart</span>
                </div>
              </Link>
            </li>
          </ul> */}
          {navbarOpen && <Mobilenavbar handleClick={handleClick} />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
