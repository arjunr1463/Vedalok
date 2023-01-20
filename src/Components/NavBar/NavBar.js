import React, { useState, useRef, useEffect } from "react";
import logo from "../../Assets/NavBar/logo1.png";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { motion } from "framer-motion";
import "../NavBar/NavBar.css";

function NavBar() {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);

  const menuclick = () => {
    setMenu(!menu);
  };

  const clicked = () => {
    setActive(!active);
  };
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActive(false);
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  //
  return (
    <div className="sticky top-0 z-[999] bg-[white] shadow-md">
      <div className="relative ">
        <div className="flex justify-between lg:justify-around items-center h-[80px] lg:h-[80px] px-[15px] lg:px-10 w-full">
          {/*Left*/}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex justify-center items-center outline-none"
          >
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="h-[60px] w-[80px] sm:h-[50px] sm:w-[105px] md:w-[80px] lg:h-[90px] lg:w-[140px]"
              />
            </Link>
          </motion.div>

          {/*Right*/}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex justify-center items-center font-semibold text-black gap-1 lg:hidden"
            onClick={menuclick}
          >
            <span className="text-[24px]">
              <AiOutlineMenu />
            </span>
            <h className="text-[19px]">MENU</h>
          </motion.div>

          <div className="hidden lg:flex gap-5 text-[15px]  mt-4 text-black font-semibold">
            <Link to="/">HOME</Link>
            <Link to="/About">ABOUT</Link>
            <a href="http://vedaalok.in/">ONLINE CLASS</a>
            <a href="http://vedaalok.in/">LIVE CLASS</a>
            <Link to="/Ideology">IDEOLOGY</Link>
            <Link to="/News">NEWS</Link>
            <div
              className="flex justify-center items-center cursor-pointer  gap-[1px]"
              onClick={clicked}
            >
              <h>PORTFOLIO</h>
              <span className="text-[12px] mt-[3px]">
                <AiFillCaretDown />
              </span>
              {active && (
                <motion.div
                  animate={{ y: [-20, 0], transition: { duration: 0.2 } }}
                  className="bg-[white] text-black absolute top-[81px] h-[70px] gap-3 flex flex-col items-start justify-center px-[10px] py-[10px] rounded-[0.3rem] z-[999]"
                  ref={menuRef}
                  onClick={active}
                >
                  <Link
                    to="/PortFolio"
                    className="flex justify-center items-center"
                  >
                    <button>PORTFOLIO</button>
                  </Link>
                  <Link
                    to="/Video"
                    className="flex justify-center items-center"
                  >
                    <button>VIDEO</button>
                  </Link>
                </motion.div>
              )}
            </div>

            <Link to="/Contact">CONTACT</Link>
          </div>
        </div>
        {menu && (
          <div>
            <Menu menuRef={menuRef} menu={menu} />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
