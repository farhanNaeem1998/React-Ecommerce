import React from "react";
import hero from "../assets/Frame 560.png";
import dropDown from "../assets/DropDown.png";

export const HeroSecton = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="flex flex-col lg:pt-12 lg:pb-7 lg:mx-50 lg:flex-row">
          <div className="flex lg:flex-col lg:basis-1/4 font-poppins lg:text-base mx-5 pt-5 lg:pt-0 lg:mx-0">
            <ul className="flex flex-row flex-wrap gap-3 items-center justify-between lg:flex-col lg:space-y-7 lg:gap-0">
              <li className="flex lg:items-center lg:gap-8">
                Woman's Fashion
                <img src={dropDown} alt="" className="h-6" />
              </li>
              <li className="flex lg:items-center lg:gap-14">
                Men's Fashion
                <img src={dropDown} alt="" className="h-6" />
              </li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby's & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className="lg:basis-3/4 mt-3 lg:mt-0">
            <img src={hero} className="w-full max-w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};
