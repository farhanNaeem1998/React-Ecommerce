import React from "react";

export const TopHeader = () => {
  return (
    <>
      <div className="w-full bg-black text-white">
        <div></div>
        <div className="flex justify-between items-center lg:px-22 md:px-14 sm:px-8 px-4 h-12 mx-auto text-sm">
          <div className="lg:ml-90">
            <p className="font-['Poppins'] text-[8px] lg:text-[14px] md:text-[12px] sm:text-[11px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%! <span className="ml-2 font-semibold">ShopNow</span>
            </p>
          </div>
          <div className="lg:mr-28 flex items-center gap-5">
            <select className="font-['Poppins'] text-[7px] lg:text-[14px] md:text-[12px] sm:text-[9px]">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
