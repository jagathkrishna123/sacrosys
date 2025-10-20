// import React from 'react';
// import bannerimage from "../assets/bannerimage.png";

// const Banner = () => {
  
//   return (
//     <div className="flex justify-center w-full p-4">
//       <div
//   className="max-w-7xl mx-auto w-full gap-[100px] flex items-center rounded-xl shadow-2xl h-[380px] relative overflow-hidden"
//   style={{
//     background: 'linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF)'
//   }}
// >
//         {/* Image Section */}
//         <div className="relative w-full md:w-1/3 h-1/2 md:h-full flex justify-center items-center p-4">
//           <img 
//             src={bannerimage}
//             alt="Security Cameras"
//             className="w-[400px]"
//             style={{ filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))' }}
//           />
//         </div>

//         {/* Text & Input Section */}
//         <div className="flex flex-col justify-center items-center md:items-start w-full md:w-2/3 p-4 md:p-8 text-white space-y-4">
//           <h2 className="text-xl md:text-2xl font-bold leading-snug text-center md:text-left">
//             Enhance Your Organization's Security <br /> with <span className="font-extrabold">Extra Eye</span>
//           </h2>

//           <div className="flex flex-col sm:flex-row w-full max-w-md sm:space-x-4 space-y-2 sm:space-y-0">
//             <input
//               type="tel"
//               placeholder="Contact Number"
//               className="flex-grow px-4 py-2 text-md text-white placeholder-white/70 rounded-lg outline-none transition duration-300"
//               style={{ 
//                 backgroundColor: 'rgba(255, 255, 255, 0.15)',
//                 border: '1px solid rgba(255, 255, 255, 0.3)'
//               }}
//             />
            
//             <button
//               className="px-6 py-2 text-md font-semibold text-white bg-black rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out whitespace-nowrap"
//             >
//               Enquiry
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from 'react';
import bannerimage from "../assets/bannerimage.png";

const Banner = () => {
  return (
    <div className="flex justify-center w-full p-4 mt-10">
      <div
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-0 md:gap-[100px] rounded-xl shadow-2xl h-[420px] md:h-[380px] relative overflow-hidden "
        style={{
          background: 'linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF)'
        }}
      >
        {/* Image Section */}
        <div className="relative w-full md:w-1/3 h-48 md:h-full flex justify-center items-center p-4">
          <img 
            src={bannerimage}
            alt="Security Cameras"
            className="w-[200px] md:w-[300px] h-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))' }}
          />
        </div>

        {/* Text & Input Section */}
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-2/3 p-4 md:p-8 text-white space-y-4">
          <h2 className="text-lg sm:text-xl md:text-[24px] font-normal font-radio leading-snug text-center md:text-left font-radio">
            Enhance Your Organization's Security <br /> 
            <span className="font-normal">Extra Eye</span>
          </h2>

          <div className="flex flex-col sm:flex-row w-full max-w-md sm:space-x-4 space-y-2 sm:space-y-0">
            <input
              type="tel"
              placeholder="Contact Number"
              className="flex-grow px-4 py-2 text-md text-white placeholder-white/70 rounded-full outline-none transition duration-300 font-mont"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            />
            
            <button
              className="px-6 py-2 text-md font-semibold text-white bg-black rounded-full shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out whitespace-nowrap"
            >
              Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
