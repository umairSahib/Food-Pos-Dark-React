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
            <div className=" flex items-center p-4 bg-[#2D303E] w-56 h-12 rounded border border-#393C49">
                <button className="flex gap-3 items-center"><i className="fa-solid fa-magnifying-glass text-[#FFFFFF]"></i>
                <h2 className="font-barlow font-normal text-sm text-[#ABBBC2]">Search for food, coffe, etc..</h2></button>
              </div>
        </div>
        <div className="flex gap-[32px] mt-6 border-b border-#393C49 ">
            <button className="text-[#EA7C69] font-barlow font-[600] text-sm border-b-2 border-[#EA7C69]"> <a href="">Hot Dishes</a></button>
            <button className="text-[#FFFFFF] font-barlow font-[600] text-sm"> <a href="">Cold Dishes</a></button>
            <button className="text-[#FFFFFF] font-barlow font-[600] text-sm"> <a href="">Soup</a></button>
            <button className="text-[#FFFFFF] font-barlow font-[600] text-sm"> <a href="">Grill</a></button>
            <button className="text-[#FFFFFF] font-barlow font-[600] text-sm"> <a href="">Appetizer</a></button>
            <button className="text-[#FFFFFF] font-barlow font-[600] text-sm"> <a href="">Dessert</a></button>
        </div>
       
   </div>
    </div>
  )
}

export default Jaegar