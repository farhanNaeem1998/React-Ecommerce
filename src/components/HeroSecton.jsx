import React from "react";
import hero from "../assets/Frame 560.png";
import dropDown from "../assets/DropDown.png";

export const HeroSecton = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="flex w-[1500px] pt-12 pb-7 mx-auto items-stretch">
          <div className="flex flex-col basis-1/4 font-poppins text-base leading-6 tracking-normal">
            <ul className="space-y-7">
              <li className="flex items-center gap-8">
                Woman's Fashion
                <img src={dropDown} alt="" className="h-6" />
              </li>
              <li className="flex items-center gap-14">
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
          <div className="basis-3/4">
            <img src={hero} className="w-full max-w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};
