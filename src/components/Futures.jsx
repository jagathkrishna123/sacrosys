// import React from 'react'
// import { CAMERAFEATURESDATA, FUTURESDATA } from '../Constants/data.js'
// import star from "../assets/star.svg"
// const Futures = () => {
//   return (
//     <div className='max-w-5xl w-full  mx-auto pt-16 '>
//         <h2
//   className="
//     font-radio
//     bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]
//     bg-clip-text text-transparent
//     text-[40px]
//     font-normal
//     leading-none
//     tracking-normal
//     text-center
//   "
// >
//   The Wide Range Futures
// </h2>

//     <div className="grid grid-cols-3 gap-4 mt-10 font-pop">
//   {FUTURESDATA.map((item, index) => (
//     <div
//       key={index}
//       className="bg-[#222222] flex flex-col items-center text-center p-6 rounded-lg gap-3"
//     >
//       <img src={item.image} alt={item.title} className="w-14 mb-3" />

//       <div>
//         <p className="text-white text-lg font-medium">{item.title}</p>
//         <p className="text-[#676767] text-sm mt-1">{item.subtitle}</p>
//         <button className="mt-3 bg-[#00AAB5] text-[11px] text-white px-2 py-1 rounded-full  hover:underline">
//           Know more
//         </button>
//       </div>
//     </div>
//   ))}
// </div>
// <div className="grid grid-cols-1 mt-16 gap-16">
//   {CAMERAFEATURESDATA.map((item, index) => (
//     <div
//       key={index}
//       className={`flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-10 ${
//         index % 2 !== 0 ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       {/* Image */}
//       <div className="flex-shrink-0">
//         <img
//           src={item.image}
//           alt=""
//           className="w-[350px] h-[350px] object-cover rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex flex-col gap-4 text-center md:text-left max-w-md">
//         <h2
//           className="text-[28px] font-radio bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] bg-clip-text text-transparent"
//           bg-clip-text text-transparent"
//         >
//           {item.title}
//         </h2>
//         <h3 className="text-lg font-semibold text-gray-200">{item.feature}</h3>
//         <p className="text-gray-400 leading-relaxed">{item.subtitle}</p>
//         <div className="flex justify-center md:justify-start">
//           <img src={star} alt="rating" className="w-[90px]" />
//         </div>
//         <button
//           className="px-5 py-2 mt-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400
//           hover:text-black transition duration-300 mx-auto md:mx-0"
//         >
//           Learn more
//         </button>
//       </div>
//     </div>
//   ))}
// </div>

// <h2 className="text-4xl font-bold text-white handwrite">
//   CompanyLogo
// </h2>
//     </div>
//   )
// }

// export default Futures

import React from "react";
import { CAMERAFEATURESDATA, FUTURESDATA } from "../Constants/data.js";
import star from "../assets/star.svg";
import Arrowright from "../assets/arrowright.svg";
import Banner from "./Banner.jsx";
const Futures = () => {
  return (
    <div className="w-full  pt-16">
      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto px-6">
        {/* Section Heading */}
        <h2
          className="
            font-radio 
            bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] 
            bg-clip-text text-transparent
            text-[26px]
            md:text-[40px] 
            font-normal 
            leading-none 
            tracking-normal 
            text-center
          "
        >
          The Wide Range Futures
        </h2>

        {/* === FUTURESDATA GRID === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 font-pop">
          {FUTURESDATA.map((item, index) => (
            <div
              key={index}
              className="bg-[#222222] flex flex-col items-center text-center p-6 rounded-lg gap-3 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img src={item.image} alt={item.title} className="w-14 mb-3" />
              <div>
                <p className="text-white text-[15px] md:text-lg font-medium">{item.title}</p>
                <p className="text-[#676767] text-sm mt-1">{item.subtitle}</p>
                <button className="mt-3 bg-[#00AAB5] text-[11px] text-white px-3 py-1 rounded-full hover:bg-[#00c2d5] transition">
                  Know more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* === CAMERAFEATURESDATA SECTION === */}
        <div className="grid grid-cols-1 mt-20 gap-20">
          {CAMERAFEATURESDATA.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt=""
                  className="w-[400px] h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 text-center md:text-left max-w-lg">
                <h2
                  className="text-[26px] md:text-[32px] text-center font-radio bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]
                  bg-clip-text text-transparent"
                >
                  {item.title}
                </h2>
                <h3 className="text-[16px] md:text-lg font-medium text-gray-200 font-radio ">
                  {item.feature}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[16px] font-pop">{item.subtitle}</p>
                <hr className="h-[2px] border-0 bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]" />

                <div className="flex justify-center">
                  <img src={star} alt="rating" className="w-[90px]" />
                </div>
                  <div className="flex justify-center">
  <button
    className="relative px-10 py-2 mt-2 rounded-full text-cyan-300 transition duration-300 max-w-fit border-2 border-transparent flex items-center justify-center gap-4"
    style={{
      background: `
        linear-gradient(#0b0b0b, #0b0b0b) padding-box,
        linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF) border-box
      `,
    }}
  >
    Learn more
    <img
      src={Arrowright}
      alt=""
      className="w-[22px] items-center"
    />
  </button>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Banner/> */}
    </div>
  );
};

export default Futures;
