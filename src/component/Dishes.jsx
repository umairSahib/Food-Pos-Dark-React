import React from 'react'
import Tabs from './tabs'

const Dishes = () => {
  return (
    <>
   <div className="bg-[#252836] basis-8/10 h-auto pt-[24px] pl-[24px] pr-[24px]">
        <div className="flex justify-between items-center">
            <div className="">
                <h1 className="font-barlow font-semi-bold text-[#FFFFFF] text-[28px]">Jaegar Resto</h1>
                <h2 className="font-barlow font-[400] text-[16px] text-[#E0E6E9] mt-[4px]">Tuesday, 2 Feb 2021</h2>
            </div>
            <div className=" flex items-center p-[14px] bg-[#2D303E] w-[220px] h-[48px] rounded-[8px] border border-#393C49">
                <button className="flex gap-[8px] items-center"><i className="fa-solid fa-magnifying-glass text-[#FFFFFF]"></i>
                <h2 className="font-barlow font-[400] text-[14px] text-[#ABBBC2]">Search for food, coffe, etc..</h2></button>
              </div>
        </div>
      
        <div className="mt-[24px] flex justify-between items-center">
            <h1 className="text-[#FFFFFF] text-[20px] font-barlow font-semi-bold">Choose Dishes</h1>
            <button className="flex items-center justify-center whitespace-pre gap-[10px] bg-[#1F1D2B] text-[#FFFFFF] w-[100px] h-[48px] p-[14px] rounded-[8px] font-barlow font-normal text-medium hover-bg-[#EA7C69]"><i className="fa-solid fa-angle-down text-[#FFFFFF]"></i><a href="">Dine In</a></button>
        </div>

      <div className="cla">

        <Tabs/>
      {/* <div className="mt-[64px] flex gap-[18px]">
            <div className=" bg-[#1F1D2B] rounded-[18px]  w-[182px] h-[226px] flex flex-col items-center">
                <div className="w-[182px] h-[226px] flex justify-center items-center -mt-[50px]">
                  <img src="images/hotdish2.png" alt="image" className="rounded-t-lg w-[132px] h-[132px] object-cover" />
                </div>
              
                <div className="mt-[16px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Spicy seasoned</div>
                <div className="mt-[0px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">seafood noodles</div>
                <div className="mt-[8px] flex justify-center text-[#FFFFFF] font-barlow font-normal text-sm">$ 2.29</div>
                <div className="mt-[4px] mb-[24px] flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm">20 Bowls available</div>
              </div>

              <div className=" bg-[#1F1D2B] rounded-[18px] w-[182px] h-[226px] flex flex-col items-center">
                <div className="w-[182px] h-[226px] flex justify-center items-center -mt-[50px]">
                  <img src="images/hotdish4.png" alt="image" className="rounded-t-lg w-[132px] h-[132px] object-cover" />
                </div>
              
                <div className=" flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Salted Pasta with </div>
                <div className="mt-[0px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">mushroom sauce</div>
                <div className="mt-[8px] flex justify-center text-[#FFFFFF] font-barlow font-normal text-sm">$ 2.69</div>
                <div className="mt-[4px] mb-[24px] flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm">11 Bowls available</div>
              </div>
    
              <div className=" bg-[#1F1D2B] rounded-[18px]  w-[182px] h-[226px] flex flex-col items-center">
                <div className="w-[182px] h-[226px] flex justify-center items-center -mt-[50px]">
                  <img src="images/hotdish10.png" alt="image" className="rounded-t-lg w-[132px] h-[132px] object-cover" />
                </div>
              
                <div className=" flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Beef dumpling in hot </div>
                <div className="mt-[0px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">and sour soup</div>
                <div className="mt-[8px] flex justify-center text-[#FFFFFF] font-barlow font-normal text-sm">$ 2.99</div>
                <div className="mt-[4px] mb-[24px] flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm">16 Bowls available</div>
              </div>
              
              
        </div>
        <div className="mt-[64px] flex gap-[18px]">
            <div className=" bg-[#1F1D2B] rounded-[18px]  w-[182px] h-[226px] flex flex-col items-center">
                <div className="w-[182px] h-[226px] flex justify-center items-center -mt-[50px]">
                  <img src="images/hotdish8.png" alt="image" className="rounded-t-lg w-[132px] h-[132px] object-cover" />
                </div>
              
                <div className="mt-[16px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Healthy noodle with </div>
                <div className="mt-[0px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">spinach leaf</div>
                <div className="mt-[8px] flex justify-center text-[#FFFFFF] font-barlow font-normal text-sm">$ 3.29</div>
                <div className="mt-[4px] mb-[24px] flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm">22 Bowls available</div>
              </div>

              <div className=" bg-[#1F1D2B] rounded-[18px]  w-[182px] h-[226px] flex flex-col items-center">
                <div className="w-[182px] h-[226px] flex justify-center items-center -mt-[50px]">
                  <img src="images/hotdish8.png" alt="image" className="rounded-t-lg w-[132px] h-[132px] object-cover" />
                </div>
              
                <div className=" flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Hot spicy fried rice  </div>
                <div className="mt-[0px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">with omelet</div>
                <div className="mt-[8px] flex justify-center text-[#FFFFFF] font-barlow font-normal text-sm">$ 3.49</div>
                <div className="mt-[4px] mb-[24px] flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm">13 Bowls available</div>
              </div>
    
              <div className=" bg-[#1F1D2B] rounded-[18px]  w-[182px] h-[226px] flex flex-col items-center">
                <div className="w-[182px] h-[226px] flex justify-center items-center -mt-[50px]">
                  <img src="images/hotdish6.png" alt="image" className="rounded-t-lg w-[132px] h-[132px] object-cover" />
                </div>
              
                <div className=" flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Spicy instant noodle </div>
                <div className="mt-[0px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">with special omelette</div>
                <div className="mt-[8px] flex justify-center text-[#FFFFFF] font-barlow font-normal text-sm">$ 3.59</div>
                <div className="mt-[4px] mb-[24px] flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm">17 Bowls available</div>
              </div>
              
              
        </div> */}
      </div>
        

  </div>
    </>
  )
}

export default Dishes