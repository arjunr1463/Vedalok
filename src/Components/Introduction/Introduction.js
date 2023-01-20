import React from "react";
import { Link } from "react-router-dom";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import { FaHandshake } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

function Introduction() {
  return (
    <div className="flex flex-col items-center bg-[#fafafa]  gap-[50px] py-[80px] font-lora">
      <div className="flex flex-col gap-[25px] items-center">
        <div className="flex flex-col items-center gap-[5px]">
          <span className="text-[18px] text-[#ffad05]">INTRODUCTION</span>
          <h className="text-[35px]">OUR VISION</h>
        </div>
        <span className="text-[14px] max-w-[90vw] text-center font-lora">
          COME TO THE WIDE WORLD OF VEDAS WITH NO HESITATION
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-[30px] ">
        <div className="flex flex-col items-center w-[90vw] sm:w-[500px] md:w-[30vw] lg:w-[300px] h-[350px] gap-[20px] bg-[#ffffff] shadow-md py-[20px] px-[20px]">
          <i className="bg-[black] text-white h-[70px] w-[80px] flex justify-center items-center text-[40px]">
            <FaHandshake />
          </i>
          <h className="text-[22px] font-semibold">SEVANAM</h>
          <span className="border-b-[1px]"></span>
          <div className="flex h-[100px] ">
            <span className="text-[16px] font-lora text-center">
              The main symptom of awakeness is the awareness about one’s own
              living surroundings.
            </span>
          </div>
          <Link
            to="/About"
            className="bg-[#ffad05] flex justify-center items-center h-[50px] w-[120px] font-semibold text-white"
          >
            READ MORE
          </Link>
        </div>
        <div className="flex flex-col items-center w-[90vw] sm:w-[500px]  md:w-[30vw] lg:w-[300px] h-[350px] gap-[20px] bg-[#ffffff] shadow-md py-[20px] px-[20px]">
          <i className="bg-[black] text-white h-[70px] w-[80px] flex justify-center items-center text-[40px]">
            <SignLanguageIcon />
          </i>
          <h className="text-[22px] font-semibold">DHARMA</h>
          <span className="border-b-[1px]"></span>
          <div className="flex h-[100px] ">
            <span className=" text-[16px] font-lora text-center">
              Dharma means doing one’s responsibilities in a proper way.
            </span>
          </div>
          <Link
            to="/About"
            className="bg-[#ffad05] flex justify-center items-center h-[50px] w-[120px] font-semibold text-white"
          >
            READ MORE
          </Link>
        </div>
        <div className="flex flex-col items-center w-[90vw] sm:w-[500px] md:w-[30vw] lg:w-[300px] h-[350px] gap-[20px] bg-[#ffffff] shadow-md py-[20px] px-[20px]">
          <i className="bg-[black] text-white h-[70px] w-[80px] flex justify-center items-center text-[40px]">
            <BsCurrencyDollar />
          </i>
          <h className="text-[22px] font-semibold">DANA</h>
          <span className="border-b-[1px]"></span>
          <div className="flex h-[100px] ">
            <span className="text-[16px] font-lora text-center">
              ‘Dhana’ or ‘Artha’ is a necessity to human. Man can satisfy his
              desires using the wealth to a certain limit.
            </span>
          </div>
          <Link
            to="/About"
            className="bg-[#ffad05] flex justify-center items-center h-[50px] w-[120px] font-semibold text-white"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
