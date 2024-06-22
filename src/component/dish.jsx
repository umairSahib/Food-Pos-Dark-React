import React from 'react'
import Tabs from './tabs'

const dish = () => {
  return (
    <>
     <div className="bg-[#252836]">
     <div className="flex justify-between items-center">
            <div className="ml-5">
                <h1 className="font-barlow font-semibold text-[#FFFFFF] text-3xl">Jaegar Resto</h1>
                <h2 className="font-barlow font-normal text-base text-[#E0E6E9] mt-1">Tuesday, 2 Feb 2021</h2>
            </div>
            <div className=" flex items-center p-4 bg-[#2D303E] rounded border border-#393C49 mr-5">
                <button className="flex gap-3 items-center"><i className="fa-solid fa-magnifying-glass text-[#FFFFFF]"></i>
                <h2 className="font-barlow font-normal text-sm text-[#ABBBC2]">Search for food, coffe, etc..</h2></button>
              </div>
        </div>
      
        <div className="mt-6 flex justify-between items-center ml-5">
            <h1 className="text-[#FFFFFF] text-xl font-barlow font-semibold">Choose Dishes</h1>
            <button className="flex items-center justify-center whitespace-pre mr-5 gap-3 bg-[#1F1D2B] text-[#FFFFFF]  p-4 rounded font-barlow font-normal text-medium hover-bg-[#EA7C69]"><i className="fa-solid fa-angle-down text-[#FFFFFF]"></i><a href="">Dine In</a></button>
        </div>
        <div className="tab">
        <Tabs/>
        </div>
     </div>
    </>
  )
}

export default dish