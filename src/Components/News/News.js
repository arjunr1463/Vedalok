import React from "react";
import image from "../../Assets/News/news.jpg"

function News() {
  return (
    <div className="flex flex-col items-center gap-[30px] py-[50px] md:py-[80px] font-lora">
      <div className="flex flex-col items-center">
        <span className="text-[18px] text-[#ffad05]">RECENT NEWS</span>
        <h className="text-[35px]">LATEST NEWS</h>
      </div>
      <div className="bg-[white] shadow-md flex flex-col items-center  pb-[10px] gap-[10px] w-[90vw] sm:w-[500px] md:w-[350px]">
        <img src={image} alt="" className="w-[100vw]" />
        <div className="flex flex-col gap-[5px] px-[10px] w-full">
          <h className="text-[22px]">SAMPLE NEWS</h>
          <span>01/10/2018</span>
          <span className="">
            This is just dummy text to show the exact size of the website
          </span>
          <button className="bg-[#ffad05] flex justify-center items-center h-[40px] w-[110px] font-semibold text-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
