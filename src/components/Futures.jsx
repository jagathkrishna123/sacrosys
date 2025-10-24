import React from "react";
import { CAMERAFEATURESDATA, FUTURESDATA } from "../Constants/data.js";
import star from "../assets/star.svg";
import Arrowright from "../assets/arrowright.svg";
import Banner from "./Banner.jsx";
import { motion } from "framer-motion";
const Futures = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay between items
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full  pt-16"
    >
      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className=" font-radio bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] bg-clip-text text-transparent text-[26px] md:text-[40px] font-normal leading-none tracking-normal  text-center"
        >
          The Wide Range Futures
        </motion.h2>

        {/* === FUTURESDATA GRID === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 font-pop"
        >
          {FUTURESDATA.map((item, index) => (
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
              }}
              className="bg-[#222222] flex flex-col items-center text-center p-6 rounded-lg gap-3 transition-transform duration-300 hover:scale-[1.02]"
            >
              <motion.img
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                src={item.image}
                alt={item.title}
                className="w-14 mb-3"
              />
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="text-white text-[16px] md:text-[20px] md:text-lg font-pop">
                  {item.title}
                </p>
                <p className="text-[#676767] font-normal text-[14px] md:text-[16px] mt-1">
                  {item.subtitle}
                </p>
                <button className="mt-3 bg-[#00AAB5] text-[11px] text-white px-3 py-1 rounded-full hover:bg-[#00c2d5] transition">
                  Know more
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* === CAMERAFEATURESDATA SECTION === */}
        <div className="grid grid-cols-1 mt-20 gap-20">
          {CAMERAFEATURESDATA.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image................................................ */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-[400px] h-[400px] object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Content.................................... */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex flex-col gap-4 text-center md:text-left max-w-lg"
              >
                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-[26px] md:text-[32px] text-center font-radio bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] bg-clip-text text-transparent"
                >
                  {item.title}
                </motion.h2>

                <div className="w-full text-gray-300 font-pop rounded-xl p-6 md:p-8 break-words whitespace-normal">
                  {/* Feature.....................................*/}
                  <div className="text-[#08F7C3] font-normal font-radio text-[16px] md:text-[24px] mb-3">
                    {item.feature}
                  </div>

                  {/* Subtitle......... */}
                  <div className="text-[16px] md:text-[17px] leading-relaxed font-pop text-gray-300">
                    {item.subtitle}
                  </div>
                </div>

                <hr className="h-[2px] border-0 bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]" />

                <div className="flex justify-center">
                  <img src={star} alt="rating" className="w-[90px]" />
                </div>
                <div className="flex justify-center">
                  <button
                    className="relative px-10 py-2 mt-2 rounded-full text-cyan-300 font-radio transition duration-300 max-w-fit border-2 border-transparent flex items-center justify-center gap-4"
                    style={{
                      background: `linear-gradient(#120E23) padding-box,
                                    linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF) border-box`,
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <Banner/> */}
    </motion.div>
  );
};

export default Futures;
