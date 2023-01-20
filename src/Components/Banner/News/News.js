import React from "react";
import { motion } from "framer-motion";
import bg from "../../../Assets/Banner/Main/banner3.jpg";
import bg1 from "../../../Assets/Banner/Main/banner3.jpg";
import "../About/Banner.css";

function News() {
  return (
    <div className="relative">
       <div className="md:hidden">
        <img
          src={bg}
          alt=""
          className="h-[300px]  w-[100vw] object-cover"
        />
      </div>
      <div className="hidden md:flex">
        <img
          src={bg1}
          alt=""
          className="h-[500px] w-[100vw] object-cover"
        />
      </div>
      <div className="container">
        <div className="flex flex-col items-center text-[white]">
          <motion.h
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-[30px] lg:text-[50px] font-bold tracking-widest"
          >
            NEWS
          </motion.h>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-medium text-[15px] lg:text-[18px] tracking-wide"
          >
            HOME NEWS
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default News;
