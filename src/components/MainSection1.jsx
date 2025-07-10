import React from "react";

import rect from "../assets/Rectangle 17.png";

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
      </div>
    </>
  );
};
