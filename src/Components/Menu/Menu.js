import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

function Menu({ menuRef, menu }) {
  const [models, setModels] = useState(false);

  const click = () => {
    setModels(!models);
  };
  const items = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.9,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={items}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "", opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit="exit"
        className="bg-[white] px-[20px] py-[20px] "
        ref={menuRef}
      >
        <div className="flex flex-col gap-[10px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex items-center cursor-pointer gap-[1px] text-[20px] font-[sans-serif] "
          >
            <Link to="/" onClick={menu}>
              Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex items-center cursor-pointer gap-[1px] text-[20px] font-[sans-serif] "
          >
            <Link to="/About" onClick={menu}>
              About
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex items-center cursor-pointer gap-[1px] text-[20px] font-[sans-serif] "
          >
            <a href="http://vedaalok.in/" onClick={menu}>
              Online Class
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex items-center cursor-pointer gap-[1px] text-[20px] font-[sans-serif] "
          >
            <a href="http://vedaalok.in/" onClick={menu}>
              Live Class
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex items-center cursor-pointer gap-[1px] text-[20px] font-[sans-serif] "
          >
            <Link to="/Ideology" onClick={menu}>
              Ideology
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex items-center cursor-pointer gap-[1px] text-[20px] font-[sans-serif]"
          >
            <Link to="/News" onClick={menu}>
              News
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex items-center cursor-pointer gap-[1px] text-[20px] font-[sans-serif]"
            onClick={click}
          >
            <h className="">Portfolio</h>
            <span className="text-[12px] mt-[3px]">
              <AiFillCaretDown />
            </span>
          </motion.div>
          {models && (
            <motion.div
              animate={{ y: [-20, 0], transition: { duration: 0.3 } }}
              className="flex flex-col text-[18px] bg-black gap-[10px] px-[20px] rounded-[0.3rem]"
            >
              <Link to="/PortFolio" onClick={menu} className="text-white">
                <button>Portfolio</button>
              </Link>
              <Link to="/Video" onClick={menu} className="text-white">
                <button>Video</button>
              </Link>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex items-center cursor-pointer gap-[1px] text-[20px] font-[sans-serif] "
          >
            <Link to="/Contact" onClick={menu}>
              Contact
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Menu;
