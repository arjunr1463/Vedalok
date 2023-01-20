import React from "react";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";

function Contact() {
  //  <h className="text-[28px] font-semibold">CONTACT INFORMATION</h>
  return (
    <div className="font-lora flex flex-col gap-[30px] items-center py-[50px] md:py-[70px] lg:py-[100px] ">
      <div className="flex flex-col md:flex-row md:gap-[20px] lg:gap-[100px] ">
        <div className="bg-[white] py-[30px] flex justify-center ">
          <div className="flex flex-col items-center gap-[15px]">
            <i className="text-[50px] text-[#f2b263] rounded-[3rem] border-[1px] border-[#f2b263] flex justify-center items-center w-[80px] h-[80px]">
              <ImLocation />
            </i>
            <span className="md:text-[18px] lg:text-[20px] font-semibold border-b-[3px] border-[#f2b263]">LOCATION</span>
            <span className="w-[250px] text-center text-[#7c8287]">
              PAVAK, YOGEEMATHAM, MAKKADA. P.O, KAKKODY, KOZHlKODE, KERALA-673
              611
            </span>
          </div>
        </div>
        <div className="bg-[white] py-[30px] flex justify-center ">
          <div className="flex flex-col items-center gap-[15px]">
            <i className="text-[50px] text-[#f2b263] rounded-[3rem] border-[1px] border-[#f2b263] flex justify-center items-center w-[80px] h-[80px]">
              <BsFillTelephoneFill />
            </i>
            <span className="md:text-[18px] lg:text-[20px] font-semibold border-b-[3px] border-[#f2b263]">PHONE NUMBER</span>
            <span className="max-w-[200px] text-[#7c8287]">
              +91 8606 217 575 <br /> +91 9497 217 576
            </span>
          </div>
        </div>
        <div className="bg-[white] py-[30px] flex justify-center ">
          <div className="flex flex-col items-center gap-[15px]">
            <i className="text-[50px] text-[#f2b263] rounded-[3rem] border-[1px] border-[#f2b263] flex justify-center items-center w-[80px] h-[80px]">
              <AiOutlineMail />
            </i>
            <span className="md:text-[18px] lg:text-[20px] font-semibold border-b-[3px] border-[#f2b263]">EMAIL</span>
            <span className="max-w-[200px] text-center text-[#7c8287] ">
              info@paavak.org <br />
              venugeedarshan@gmail.com
            </span>
          </div>
        </div>
        <div className="bg-[white] py-[30px] flex justify-center ">
          <div className="flex flex-col items-center gap-[15px]">
            <i className="text-[50px] text-[#f2b263] rounded-[3rem] border-[1px] border-[#f2b263] flex justify-center items-center w-[80px] h-[80px]">
              <FaGlobe />
            </i>
            <span className="md:text-[18px] lg:text-[20px] font-semibold border-b-[3px] border-[#f2b263]">VISIT</span>
            <span className="max-w-[200px] text-[#7c8287]">www.pavak.org</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] items-center bg-[#f2b263] w-[95vw] md:w-[600px] py-[40px] ">
        <h className="text-[white] flex justify-center text-[30px] font-bold">
          GET IN TOUCH
        </h>
        <div className="flex flex-col gap-[30px] w-[80vw] md:w-[500px]">
          <input
            type="text"
            placeholder="Enter your Name"
            className="h-[45px] px-[10px] font-[sans-serif] outline-none"
          />
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="h-[45px] px-[10px] font-[sans-serif] outline-none"
          />
          <input
            type="text"
            placeholder="Enter your Place"
            className="h-[45px] px-[10px] font-[sans-serif] outline-none"
          />
          <input
            type="tel"
            placeholder="Enter your Phone Number"
            className="h-[45px] px-[10px] font-[sans-serif] outline-none"
          />
          <input
            type="text"
            placeholder="Project Details"
            className="h-[120px] px-[10px] font-[sans-serif] outline-none"
          />
        </div>
        <button className="text-[black] bg-[white] font-semibold uppercase text-[18px]  flex justify-center items-center w-[90px] h-[40px] shadow-sm">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
