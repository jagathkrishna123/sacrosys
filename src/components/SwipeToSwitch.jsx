

import React, { useState } from "react";
import Arrowleft from "../assets/arrowlft.svg"

const SwipeToSwitch = () => {
  const [swiped, setSwiped] = useState(false);

  const handleClick = () => {
    setSwiped(!swiped);
  };

  return (
   <div className="bg-green-900 p-3 rounded-full border-[2px] border-[#3461FF]">
     <div
      className="relative w-64 md:w-96 h-12 md:h-16 bg-emerald-200 rounded-full flex items-center p-1 cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Sliding toggle */}
      <div
        className={`h-10 md:h-14 w-32 md:w-44 rounded-full flex items-center justify-center text-white font-semibold text-lg transition-all duration-500 ease-in-out shadow-lg ${
          swiped
            ? "ml-0 bg-gradient-to-r from-[#004F1A] to-emerald-500"
            : "ml-auto bg-gradient-to-r from-[#08F7B7] to-[#004F1A]"
        }`}
      >
        <span className="flex items-center gap-2 font-radio font-semibold text-[14px]">
           Swipe to Switch
        </span>
      </div>

      {/* Background label when not swiped */}
      {!swiped ? (
  <img
    src={Arrowleft}
    alt=""
    className="w-8 absolute left-1/4 sm:left-1/3 md:left-1/4 -translate-x-1/2 z-20 pointer-events-none"
  />
) : (
  <img
    src={Arrowleft}
    alt=""
    className="w-8 rotate-180 absolute right-6 sm:right-10 md:right-12 z-20 pointer-events-none"
  />
)}



    </div>
   </div>
  );
};

export default SwipeToSwitch;
