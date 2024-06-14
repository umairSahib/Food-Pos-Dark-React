import React from 'react'

const Cards = () => {
  return (
    <div>
  <div className="bg-[#1F1D2B]  rounded-lg border-1 border-[#393C49] w-[221px] h-[299px]" >
     <div className="flex justify-center mt-6">
        <img src="images/image(1).png" alt="image" />
         
     </div>
     <div className="mt-[14px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Spicy seasoned </div>
     <div className="mt-[0px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm"> seafood noodles </div>
     <div className="mt-[8px] flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm"> $ 2.29 20 Bowls </div>

     <div className="flex justify-center items-center mt-[30px] bg-[#50343a] rounded-bl-[8px] rounded-br-[8px] rounded-tl-0 rounded-tr-0 w-[221px] h-[52px]">
        <i className="fa-solid fa-pen flex justify-center items-center text-[#EA7C69]"></i>
        <div className="font-barlow font-semibold text-sm text-[#EA7C69]">Edit dish</div>
      </div>
      
    </div>

    <div className="mt-[45px] bg-[#1F1D2B] rounded-lg border-1 border-#393C49 w-[196px] h-[226px] flex flex-col items-center">
      <div className="w-[196px] h-[196px] flex justify-center items-center -mt-[40px]">
        <img src="images/image(1).png" alt="image" className="rounded-t-lg w-[132px] h-[132px] object-cover" />
      </div>
    
      <div className="mt-[16px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Spicy seasoned</div>
      <div className="mt-[0px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">seafood noodles</div>
      <div className="mt-[8px] flex justify-center text-[#FFFFFF] font-barlow font-normal text-sm">$ 2.29</div>
      <div className="mt-[4px] mb-[24px] flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm">20 Bowls available</div>
    </div>
    </div>
  )
}

export default Cards