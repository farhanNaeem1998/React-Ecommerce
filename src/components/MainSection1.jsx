import React from "react";

import rect from "../assets/Rectangle 17.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

export const MainSection1 = () => {
  return (
    <>
      <div className="main w-full lg:mt-30 mt-5">
        <div className="red flex justify-start lg:mx-50 items-center mx-5">
          <div className="rect">
            <img src={rect} alt="" className="w-5 h-10" />
          </div>
          <div className="text ml-3 text-red-500">Today's </div>
        </div>
        <div className="sales flex lg:mx-50 items-center mx-5 justify-between lg:mt-10 mt-3">
          <div className="first flex items-center justify-start">
            <div className="font-bold lg:text-4xl text-1xl">
              <h1>Flash Sales</h1>
            </div>
            <div className="lg:ml-70 font-bold lg:text-4xl text-1xl ml-10">
              <h1>03 : 23 : 19 : 56</h1>
            </div>
          </div>
          <div className="second flex items-center justify-start">
            <div>
              <img src={left} alt="" className="w-[46px] h-[46px]" />
            </div>
            <div>
              <img src={right} alt="" className="w-[46px] h-[46px]" />
            </div>
          </div>
        </div>
        <div className="flash-sales-cards w-full flex justify-start overflow-hidden lg:ml-50 border-2 border-gray-200 mt-10">
          <div>Helloooo</div>
        </div>
      </div>
    </>
  );
};
