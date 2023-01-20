import React from "react";
import {Link} from "react-router-dom"
import image from "../../Assets/Gallery/demo.jpg";

function Gallery() {
  return (
    <div className="bg-[#fafafa] flex flex-col items-center gap-[30px] pt-[20px] pb-[100px] px-[10px]">
      <div className="text-[35px] border-b-[2px] border-[#ffad05]">
        <h>PAVAK GALLERY</h>
      </div>
      <div className="text-[16px] text-center font-lora  ">
        <span>COME TO TH WIDE WORLD OF VEDAS WITH NO HESITATION</span>
      </div>
      <div className="flex h-[300px] md:mx-[30px] gap-[10px]">
        <div className="flex flex-1 flex-col gap-[10px]">
          <div className="flex flex-1 gap-[10px] relative overflow-hidden hover:scale-95 duration-300" >
            <img src={image} alt="" className="w-full h-full object-cover " />
          </div>
          <div className="flex flex-1 gap-[10px] relative overflow-hidden hover:scale-95 duration-300">
            <img src={image} alt="" className="w-full h-full object-cover " />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[10px]">
          <div className="flex flex-1 gap-[10px] relative overflow-hidden hover:scale-95 duration-300">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[10px] flex-2">
          <div className="flex flex-1 gap-[10px] relative overflow-hidden ">
            <div className="flex flex-1 flex-col gap-[10px]">
              <div className="flex flex-1 gap-[10px] relative overflow-hidden hover:scale-95 duration-300">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[10px]">
              <div className="flex flex-1 gap-[10px] relative overflow-hidden hover:scale-95 duration-300">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-[10px] relative overflow-hidden hover:scale-95 duration-300">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
      <div>
        <Link to="/PortFolio" className="bg-[#ffad05] flex justify-center items-center h-[40px] w-[110px] font-semibold text-white">
          LOAD MORE
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
