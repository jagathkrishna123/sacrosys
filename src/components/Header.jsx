import React from 'react'
import SwipeToSwitch from './SwipeToSwitch'

const Header = () => {
  return (
    <div className="relative flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center min-h-[100vh]">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Content */}
  <div className="max-w-6xl relative z-10 w-full p-4 sm:p-6 md:p-8">
    <div className="max-w-2xl font-bold text-[24px] sm:text-[28px] md:text-[40px] font-pop flex flex-col gap-4 md:gap-2">
      {/* Title */}
      <div className="mb-4 leading-snug sm:leading-normal">
        <p className="text-[#08F7C3]">
          <span className="bg-gradient-to-r from-[#F9F9F9] to-[#05915B] bg-clip-text text-transparent">
            Comprehensive
          </span>{" "}
          CCTV And
        </p>
        <p className="text-[#08F7C3]">Network Solutions Tailored for</p>
        <p className="bg-gradient-to-r from-white to-[#08F7c3] bg-clip-text text-transparent">
          Every Organization
        </p>
      </div>

      {/* Subtitle */}
      <div>
        <p className="text-[12px] sm:text-[14px] md:text-[16px] font-extralight font-pop leading-relaxed text-gray-100">
          The top CCTV and networking solutions in Dubai are essential for any
          business owner to consider for their security.
        </p>
      </div>

      {/* Gradient divider */}
      <hr className="h-[2px] border-0 bg-gradient-to-r from-[#08F7c3] to-[#05915B] my-3 sm:my-4 w-full" />
    </div>
  </div>

  {/* Bottom swipe section */}
  <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
    <SwipeToSwitch />
  </div>
</div>

  )
}

export default Header