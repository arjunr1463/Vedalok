import React from "react";
import bg from "../../../Assets/Banner/Home/HomeBanner1.jpg";
import bg1 from "../../../Assets/Banner/Home/HomeBanner2.jpg";
import AwesomeSlider from "react-awesome-slider";
import "../Banner.css";
import "react-awesome-slider/dist/styles.css";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function HomeBanner() {
  const { ref } = useInView({
    threshold: 0.1,
  });
  return (
    <div className="" ref={ref}>
      <AwesomeSlider
        mobileTouch={true}
        fillParent={false}
        bullets={false}
        organicArrows={true}
        buttons={true}
        className="h-[550px] sm:h-[400px] md:h-[550px] lg:h-[680px] "
      >
        <div>
          <img
            src={bg}
            alt=""
            className=" object-cover blur-[2px]  w-[100vw] max-sm:h-[720px] sm:h-[600px] lg:h-[700px]"
          />

          <div className="text-white container flex flex-col items-center gap-[20px]">
            <div className="flex flex-col items-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="text-[30px] lg:text-[50px] font-bold"
              >
                GENERATE YOUR
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="text-[30px] lg:text-[50px] font-bold "
              >
                KNOWLEDGE
              </motion.span>
            </div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                to="/About"
                className="bg-[#f39520] flex justify-center items-center h-[40px] w-[120px] rounded-[0.4rem] font-semibold"
              >
                READ MORE
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          <div className="">
            <img
              src={bg1}
              alt=""
              className="object-cover blur-[2px] w-[100vw] max-sm:h-[720px] sm:h-[600px] lg:h-[700px] "
            />
          </div>

          <div className="text-white container flex flex-col items-center gap-[20px]">
            <div className="flex flex-col items-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="text-[30px] lg:text-[50px] font-bold "
              >
                FOR YOUR OWN
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="text-[30px] lg:text-[50px] font-bold "
              >
                WISDOM
              </motion.span>
            </div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                to="/About"
                className="bg-[#f39520] flex justify-center items-center h-[40px] w-[120px] rounded-[0.4rem] font-semibold"
              >
                READ MORE
              </Link>
            </motion.div>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
}

export default HomeBanner;
