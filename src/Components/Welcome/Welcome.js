import React from "react";
import {Link} from "react-router-dom"
import image from "../../Assets/About/aboutbg.jpg";

function Welcome() {
  return (
    <div className=" flex flex-col items-center md:items-start md:flex-row gap-[30px] lg:gap-[60px] md:justify-center py-[50px] md:py-[100px]">
      <div className="flex px-[10px] w-full flex-col sm:items-center md:hidden">
          <h className="font-semibold text-[#ffad05] text-[20px]">WELCOME TO PAVAK</h>
          <div>
          <h className="font-semibold text-[28px] border-b-[3px] border-[#ffad05]">
            HISTORY OF PAAVAK
          </h>
          </div>
        </div>
      <div className="flex">
        <img
          src={image}
          alt=""
          className="w-[100vw] sm:w-[500px]  md:w-[45vw] lg:w-[30vw]  md:h-[550px] object-cover"
        />
      </div>
      <div className="flex flex-col sm:w-[500px] md:w-[45vw] lg:w-[50vw] gap-[30px] px-[10px]">
        <div className="hidden md:flex flex-col">
          <h className="font-semibold text-[#ffad05] text-[20px]">WELCOME TO PAVAK</h>
          <div>
          <h className="font-semibold text-[35px] border-b-[3px] border-[#ffad05]">
            HISTORY OF PAAVAK
          </h>
          </div>

        </div>
        <div className="flex  flex-col gap-[15px] ">
          <h className="text-[20px] font-semibold">
            COME TO THE WIDE WORLD OF VEDAS WITH NO HESITATION
          </h>
          <p className="text-[#7c8287] text-[18px] break-all font-lora">
            Man is a social-being. Mere human can purposefully struggle for his
            existence and progress.For this he needs the co-operation of not
            only his co-beings but also the entire living-Non-living world.
          </p>
          <p className="text-[#7c8287] text-[18px] break-all font-lora">
            As he loves himself, he loves and accepts the entire universe and
            the same love makes him say “Loka Samasta Sukhino Bhavantu”.
          </p>
          <Link to="/About" className="bg-[#ffad05] flex justify-center items-center h-[50px] w-[120px] font-semibold text-white">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
