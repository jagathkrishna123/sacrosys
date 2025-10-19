

import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SwipeToSwitch = () => {
  const [swiped, setSwiped] = useState(false);

  const handleClick = () => {
    setSwiped(!swiped);
  };

  return (
   <div className="bg-green-900 p-3 rounded-full border-[2px] border-[#3461FF]">
     <div
      className="relative w-96 h-16 bg-emerald-200 rounded-full flex items-center p-1 cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Sliding toggle */}
      <div
        className={`h-14 w-44 rounded-full flex items-center justify-center text-white font-semibold text-lg transition-all duration-500 ease-in-out shadow-lg ${
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
        <p className="absolute left-1/2 -translate-x-1/2 text-emerald-800 font-semibold pointer-events-none">
          <MdOutlineKeyboardDoubleArrowLeft className="text-2xl"/>
        </p>
      ):(
        <p className="absolute left-1/2 -translate-x-1/2 text-emerald-800 font-semibold pointer-events-none">
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl"/>
        </p>
      )}
    </div>
   </div>
  );
};

export default SwipeToSwitch;
