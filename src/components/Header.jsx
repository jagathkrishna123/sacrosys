import React from 'react'
import SwipeToSwitch from './SwipeToSwitch'

const Header = () => {
  return (
    // <div className="relative flex flex-col items-start justify-center 
    // px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-white 
    // bg-[url('/src/assets/heroImage.png')] 
    // bg-no-repeat bg-cover bg-center 
    // sm:bg-[center_top] md:bg-center 
    // min-h-[90vh] md:min-h-[100vh]">
//     <div className="
//   relative flex flex-col items-start justify-center
//   px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32
//   text-white
//   bg-[url('/src/assets/heroImage.png')]
//   bg-no-repeat bg-cover
//   bg-right sm:bg-center md:bg-center
//   min-h-[90vh] md:min-h-[100vh]
// ">
<div className="
  relative flex flex-col items-start justify-center
  px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32
  text-white
  bg-[url('/src/assets/heroImage.png')]
  bg-no-repeat bg-cover
  bg-[right_50%] sm:bg-center md:bg-center
  min-h-[90vh] md:min-h-[100vh]">


      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content note change padding++++++++++++++++++...... */}
      <div className="max-w-7xl mx-auto relative z-10 w-full p-4 sm:p-6 md:p-0"> 
        <div className="max-w-2xl font-bold text-[36px] md:text-[40px] font-pop flex flex-col gap-4 md:gap-2 leading-tight sm:leading-snug">
          
          {/* Headings */}
          <div className="mb-4 leading-snug">
            <p className="text-[#08F7C3]">
              <span className="bg-gradient-to-r from-[#F9F9F9] to-[#05915B] bg-clip-text text-transparent">
                Comprehensivee
              </span>{" "}
            </p>
            <p className="text-[#08F7C3] max-w-sm">CCTV And Network Solutions Tailored fuor Every Organization</p>
            {/* <p className="bg-gradient-to-r from-white to-[#08F7c3] bg-clip-text text-transparent">
              
            </p> */}
          </div>

          {/* Subtitle..................... */}
          <div>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] font-extralight font-pop leading-relaxed text-gray-100">
              The top CCTV and networking solutions in Dubai are essential for any
              business owner to consider for their security.
            </p>
          </div>

          {/* Gradient............ */}
          <hr className="h-[2px] border-0 bg-gradient-to-r from-[#08F7c3] to-[#05915B] my-4 w-full" />
        </div>
      </div>

      {/* Bottom....... */}
      <div className="absolute bottom-8 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <SwipeToSwitch />
      </div>
    </div>
  )
}

export default Header
