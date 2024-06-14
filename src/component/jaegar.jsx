import React from 'react'

const Jaegar = () => {
  return (
    <div>
   <div className="bg-[#2D303E] mt-3">
   <div className="flex justify-between items-center bg-[#2D303E] ">
            <div className="">
                <h1 className="font-barlow font-semi-bold text-[#FFFFFF] text-[28px]">Jaegar Resto</h1>
                <h2 className="font-barlow font-[400] text-[16px] text-[#E0E6E9] mt-[4px]">Tuesday, 2 Feb 2021</h2>
            </div>
            <div className=" flex items-center p-[14px] bg-[#2D303E] w-[220px] h-[48px] rounded-[8px] border border-#393C49">
                <button className="flex gap-[8px] items-center"><i className="fa-solid fa-magnifying-glass text-[#FFFFFF]"></i>
                <h2 className="font-barlow font-[400] text-[14px] text-[#ABBBC2]">Search for food, coffe, etc..</h2></button>
              </div>
        </div>
        <div className="flex gap-[32px] mt-[24px] border-b border-#393C49 ">
            <button className="text-[#EA7C69] font-barlow font-[600] text-[14px] border-b-2 border-[#EA7C69]"> <a href="">Hot Dishes</a></button>
            <button className="text-[#FFFFFF] font-barlow font-[600] text-[14px]"> <a href="">Cold Dishes</a></button>
            <button className="text-[#FFFFFF] font-barlow font-[600] text-[14px]"> <a href="">Soup</a></button>
            <button className="text-[#FFFFFF] font-barlow font-[600] text-[14px]"> <a href="">Grill</a></button>
            <button className="text-[#FFFFFF] font-barlow font-[600] text-[14px]"> <a href="">Appetizer</a></button>
            <button className="text-[#FFFFFF] font-barlow font-[600] text-[14px]"> <a href="">Dessert</a></button>
        </div>
       
   </div>
    </div>
  )
}

export default Jaegar