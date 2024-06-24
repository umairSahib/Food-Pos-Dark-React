import React from 'react'

const Jaegar = () => {
  return (
    <div>
   <div className="w-full bg-[#2D303E] ">
   <div className="flex justify-between items-center  bg-[#2D303E] w-full ">
            <div className="">
                <h1 className="font-barlow font-semibold text-[#FFFFFF] text-3xl">Jaegar Resto</h1>
                <h2 className="font-barlow font-normal text-base text-[#E0E6E9] mt-1">Tuesday, 2 Feb 2021</h2>
            </div>
            <div className=" flex items-center p-4 bg-[#2D303E] rounded-lg border border-#393C49">
                <button className="flex gap-3 items-center"><i className="fa-solid fa-magnifying-glass text-[#FFFFFF]"></i>
                <h2 className="font-barlow font-normal text-sm text-[#ABBBC2]">Search for food, coffe, etc..</h2></button>
              </div>
        </div>
 
       
   </div>
    </div>
  )
}

export default Jaegar