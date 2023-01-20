import React from 'react'
import image1 from "../../Assets/About/about1.jpg"
import image2 from "../../Assets/About/about2.jpg"
import image3 from "../../Assets/About/about3.jpg"

function Trio() {
  return (
    <div className='flex flex-col gap-[20px] md:gap-[50px] items-center py-[50px] md:py-[100px] px-[10px]'>
      <div className='text-[22px] sm:text-[30px] font-semibold tracking-wider sm:border-b-[2px] border-[#ffad05] text-center'>
        <h className="">THE LUMINARY TRIO OF MY CAREER</h>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]'>
        <img src={image1} alt="" className='w-[350px]'/>
        <img src={image2} alt="" className='w-[350px]'/>
        <img src={image3} alt="" className='w-[350px]'/>
      </div>

    </div>
  )
}

export default Trio
