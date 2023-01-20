import React from 'react'

function PortFolio({image,title}) {
  return (
    <div className='bg-[white] flex flex-col gap-[10px] items-center w-[90vw] sm:w-[300px] shadow-md'>
        <div className=''> 
            <img src={image} alt="" className='w-[100vw] h-[250px] object-cover'/>
        </div>
        <div className=' w-full flex justify-center h-[80px]'>
            <h className="text-center font-semibold text-[18px]">{title}</h>
        </div>
      
    </div>
  )
}

export default PortFolio
