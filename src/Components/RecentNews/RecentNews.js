import React from "react";
import {Link} from "react-router-dom"
import image from "../../Assets/News/news.jpg"

function RecentNews() {
  return (
    <div className="flex flex-col items-center gap-[30px] py-[50px]">
      <div className="flex flex-col gap-[10px] items-center">
        <span className="text-[18px] text-[#ffad05]">RECENT NEWS</span>
        <h className="text-[35px]">LATEST NEWS</h>
        <span className="text-[14px] max-w-[90vw] text-center font-lora ">
        COME TO THE WIDE WORLD OF VEDAS WITH NO HESITATION
      </span>
      </div>
      
      <div className="bg-[white] shadow-md flex flex-col items-center  pb-[10px] gap-[10px] w-[90vw] sm:w-[500px] md:w-[350px]">
        <img src={image} alt="" className="w-[100vw]" />
        <div className="flex flex-col gap-[5px] px-[10px] w-full">
          <h className="text-[22px] font-lora ">SAMPLE NEWS</h>
          <span>01/10/2018</span>
          <span className=" font-lora ">
            This is just dummy text to show the exact size of the website
          </span>
          <Link to="/News" className="bg-[#ffad05] flex justify-center items-center h-[40px] w-[110px] font-semibold text-white">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecentNews;
