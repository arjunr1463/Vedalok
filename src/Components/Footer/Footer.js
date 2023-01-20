import React from "react";
import Logo from "../../Assets/NavBar/logo1.png"
import { Link } from "react-router-dom";
import { FiSend } from 'react-icons/fi';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaAddressCard } from 'react-icons/fa';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';




function Footer() {
  return (
    <div className="flex flex-col px-[20px] lg:px-[50px] py-[20px] font-lora">
      {/*Top */}
      <div className="grid grid-cols-1 gap-[30px] md:gap-10 md:grid-cols-3  ">
        {/*Left */}
        <div className="flex flex-col gap-[20px] text-[15px] lg:text-[17px] ">
          <div>
            <img src={Logo} alt="" className="w-[150px] h-[80px]" />
          </div>
          <div className=" max-w-[400px]">
            <span className="">
              Pavamanee Arsha Vidya Anusandhana kendram – known as in the
              acronym of ‘PAVAK’- is the very result of this realization.
            </span>
          </div>
          <div className="max-w-[350px] flex gap-3 items-center ">
            <i><FaAddressCard/></i>
            <span>
              PAVAK, YOGEEMATHAM, MAKKADA. P.O, KAKKODY, KOZHlKODE, KERALA-673
              611
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <i><FiSend/></i>
            <span>venugeedarshan@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center">
            <i><BsTelephoneFill/></i>
            <span>+91 8606 217 575, +91 9497 217 576,</span>
          </div>
        </div>
        {/*Center */}
        <div className="flex flex-col  gap-[20px]">
          <div>
            <h className="text-[22px] lg:text-[28px] text-[#ffad05]">IMPORTANT LINKS</h>
          </div>
          <div className="flex flex-col gap-[10px]">
            <Link to="/" className="">HOME</Link>
            <span className="border-b-[2px] max-w-[400px]"></span>
            <Link to="/About">ABOUT</Link>
            <span className="border-b-[2px] max-w-[400px]"></span>
            <a href="http://vedaalok.in/">ONLINE CLASS</a>
            <span className="border-b-[2px] max-w-[400px]"></span>
            <a href="http://vedaalok.in/">LIVE CLASS</a>
            <span className="border-b-[2px] max-w-[400px]"></span>
            <Link to="/Ideology">IDEOLOGY</Link>
            <span className="border-b-[2px] max-w-[400px]"></span>
            <Link to="/News">NEWS</Link>
            <span className="border-b-[2px] max-w-[400px]"></span>
            <Link to="/PortFolio">PORTFOLIO</Link>
            <span className="border-b-[2px] max-w-[400px]"></span>
            <Link to="/Contact">CONTACT</Link>
            <span className="border-b-[2px] max-w-[400px]"></span>
          </div>
        </div>

        {/*Right */}
        <div className="flex flex-col gap-[20px]">
          <div>
            <h className="text-[22px] lg:text-[28px] text-[#ffad05]">NEWSLETTER</h>
          </div>
          <div className="max-w-[300px]">
            <span className="text-[15px]">COME TO TH WIDE WORLD OF VEDAS WITH NO HESITATION</span>
          </div>
          <div className="flex flex-col gap-[10px] max-w-[350px]">
            <input type="text" placeholder="Your name" className="border-[1px] w-full h-[50px] px-[10px] text-[18px] outline-none"/>
            <div className="flex items-center">
            
            <input type="email" placeholder="Your email here" className="border-[1px] w-full h-[50px] px-[10px] text-[18px] outline-none"/>
            <button className="bg-[#ffad05] flex items-center justify-center w-[100px] h-[50px] text-[25px]"><FiSend/></button>
            </div>
            
          </div>
        </div>
      </div>
      {/*Bottom */}
      <div className="flex flex-col gap-[10px] md:gap-0 md:flex-row justify-center items-center md:items-end  md:justify-between h-[150px] md:h-[100px]">
        <span>© 2017 Pavak. All Rights Reserved</span>
        <div className="flex gap-[20px] items-center justify-center">
          <button className=""><FacebookIcon/></button>
          <button><TwitterIcon/></button>
          <button><GoogleIcon/></button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
