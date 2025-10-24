import React from "react";
import { ALLCAMERAS } from "../Constants/data";
import carticon from "../assets/carticon.svg";
import staricon from "../assets/staricon.svg";
import { motion } from "framer-motion";

const ProductList = () => {
  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col gap-3 p-2 mt-10">
      <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
       className="font-radio text-[30px] md:text-[40px] text-center bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] bg-clip-text text-transparent">
        Explore Products
      </motion.h2>
      <p className="text-[16px] font-pop text-[#E6CCFF] text-end pr-4 md:pr-10">
        Latest cameras
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{staggerChildren: 0.2}}
       className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {ALLCAMERAS.map((item, index) => (
          <motion.div
            initial={{opacity:0, y: 30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay: index * 0.2}}
           key={index} className="bg-black flex flex-col items-center justify-center rounded-lg w-fit p-4">
            <div className="flex-shrink-0 relative">
              <img
                src={item.image}
                alt=""
                className="w-[210px] h-[143px] object-cover rounded-lg shadow-lg"
              />
              <img
                src={staricon}
                alt="Star"
                className="w-6 h-6 absolute top-2 right-2 invert"
              />
            </div>

            <div className="flex flex-col w-full mt-2 gap-3">
              <h1 className="text-[18px] md:text-[24px] font-bold text-[#A5AFC4] font-radio text-start">
                {item.productname}
              </h1>
              <p className="text-[12px] text-[#667085] font-pop text-start">
                {item.speciality}
              </p>
              <p className="text-[12px] font-bold text-[#667085] text-end font-radio">
                More details
              </p>
              <div className="flex flex-row justify-between items-center">
                <button className="w-[100px] h-[22px] sm:w-[120px] sm:h-[28px] md:w-[148px] md:h-[32px] bg-[#00AAB5] text-[14px] font-radio md:text-[16px] text-white rounded-full hover:bg-[#00c2d5] transition flex items-center justify-center">
                  Buy
                </button>
                <img
                  src={carticon}
                  alt=""
                  className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductList;
