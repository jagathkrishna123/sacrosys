import React from 'react'
import SwipeToSwitch from './SwipeToSwitch'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="
      relative flex flex-col items-start justify-center
      text-white
      bg-[url('/src/assets/heroImage.png')]
      bg-no-repeat bg-cover
      bg-[position:right_20%_center] sm:bg-center md:bg-center
      min-h-[90vh] md:min-h-[100vh]">

      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* .......................... */}
      <div className="max-w-[1380px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <div className="max-w-2xl font-bold text-[36px] md:text-[40px] font-pop flex flex-col gap-4 md:gap-2 leading-tight sm:leading-snug">

          {/* Headings */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 leading-snug">
            <p className="text-[#08F7C3]">
              <span className="bg-gradient-to-r from-[#F9F9F9] to-[#05915B] bg-clip-text text-transparent">
                Comprehensivee
              </span>{" "}
            </p>
            <p className="text-[#08F7C3] max-w-sm">
              CCTV And Network Solutions Tailored fuor Every Organization
            </p>
          </motion.div>

          {/* Subtitle..................... */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-[14px] sm:text-[15px] md:text-[17px] font-extralight font-pop leading-relaxed text-gray-100">
              The top CCTV and networking solutions in Dubai are essential for any
              business owner to consider for their security.
            </p>
          </motion.div>

          {/* Gradient............ */}
          <hr className="h-[2px] border-0 bg-gradient-to-r from-[#08F7c3] to-[#05915B] my-4 w-full" />
        </div>
      </div>

      {/* Bottom....... */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-8 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <SwipeToSwitch />
      </motion.div>
    </div>
  )
}

export default Header
