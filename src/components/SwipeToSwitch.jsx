import React, { useState } from "react";

const SwipeToSwitch = () => {
  const [swiped, setSwiped] = useState(false);

  const handleClick = () => {
    setSwiped(!swiped);
  };

  return (
    <div
      className="relative w-96 h-16 bg-emerald-200 rounded-full flex items-center p-2 overflow-hidden cursor-pointer select-none"
      onClick={handleClick}
    >
      <div
        className={`absolute top-1 left-1 h-14 w-44 rounded-full flex items-center justify-center text-white font-semibold text-lg transition-all duration-500 ease-in-out shadow-lg ${
          swiped
            ? "translate-x-[190px] bg-gradient-to-r from-[#08F7B7] to-[#004F1A]"
            : "translate-x-0 bg-gradient-to-r from-teal-400 to-emerald-500"
        }`}
      >
        <span className="flex items-center gap-2">
          <span className="text-xl"></span> Swipe to Switch
        </span>
      </div>

      {!swiped && (
        <p className="absolute left-1/2 -translate-x-1/2 text-emerald-900 font-semibold">
          
        </p>
      )}
    </div>
  );
};

export default SwipeToSwitch;
