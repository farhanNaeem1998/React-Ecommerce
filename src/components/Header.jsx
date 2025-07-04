import React, { useState } from "react";
import search from "../assets/Component 2.png";
import cart from "../assets/Cart1.png";
import heart from "../assets/Vector.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  return (
    <>
      <div className="w-full bg-white">
        <div className="flex justify-between lg:justify-between md:justify-start items-center mx-5 md:mx-22 pt-4 pb-4 text-sm ">
          <div className="lg:ml-30 md:ml-14">
            <p className="font-['Inter'] font-bold text-[20px] leading-[24px] tracking-[0.72px]">
              Exclusive
            </p>
          </div>
          <div className="md:hidden lg:flex hidden">
            <ul className="flex gap-15 ">
              <li className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-center">
                Home
              </li>
              <li className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-center">
                Contact
              </li>
              <li className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-center">
                About
              </li>
              <li className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-center">
                Sign Up
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:justify-center lg:gap-5 lg:w-[400px] md:w-[1000px] md:justify-between md:gap-2 md:ml-22 lg:mr-20">
            <div className="hidden lg:flex md:flex items-center gap-2 bg-gray-100 w-60 h-8 p-5">
              <input type="text" placeholder="What are you looking for?" />
              <img src={search} alt="" className="w-6 h-6" />
            </div>
            <div
              className="flex gap-5 items-center flex-row"
              onClick={() => setSearchClicked(!searchClicked)}
            >
              <div className="flex lg:hidden md:hidden">
                <img src={search} alt="" className="w-8 h-8" />
              </div>
              <div className=" lg:flex md:flex">
                <img src={heart} alt="" className="w-6 h-6" />
              </div>
              <div className=" lg:flex md:flex">
                <img src={cart} alt="" className="w-7 h-7" />
              </div>
              <div
                className="flex lg:hidden md:flex"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/10513/10513594.png"
                  alt=""
                  className="w-7 h-7"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          {isOpen && (
            <div className="absolute top-28 right-0  w-[200px] bg-gray-100  shadow-lg z-50 border border-gray-200 rounded-lg ">
              <ul className="flex flex-col items-center gap-4 py-4">
                <li className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-center">
                  Home
                </li>
                <li className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-center">
                  Contact
                </li>
                <li className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-center">
                  About
                </li>
                <li className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-center">
                  Sign Up
                </li>
              </ul>
            </div>
          )}
        </div>
        {searchClicked && (
          <div className="absolute top-29 left-1/2 transform -translate-x-1/2 bg-gray-100 w-[300px] h-[40px] flex items-center justify-between px-4 shadow-lg rounded-lg z-50">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full h-full bg-transparent outline-none"
            />
            <img
              src={search}
              alt=""
              className="w-6 h-6"
              onClick={() => setSearchClicked(false)}
            />
          </div>
        )}

        <hr />
      </div>
    </>
  );
};
