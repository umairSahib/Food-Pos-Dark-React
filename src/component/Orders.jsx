import React from 'react'

const Orders = () => {
  return (
    <div>
         <div className="bg-[#1F1D2B] basis-3/10 h-[834px] rounded-tr-8 rounded-br-8 pt-[24px] pl-[24px] pr-[24px]">
    <h1 className="font-barlow font-semi-bold text-[20px] text-[#FFFFFF]">Orders #34562</h1>
    <div className="flex gap-[8px] mt-[24px]">
      <button className="flex items-center justify-center bg-[#EA7C69] w-[66px] h-[34px] rounded-[8px] font-barlow font-normal text-semi-bold text-[#FFFFFF] hover:bg-[#50343a] p-[7px, 12px, 7px, 12px]  "><a href="/">Dine In</a></button>
      <button className="flex items-center justify-center bg-[#1F1D2B] w-[58px] h-[34px] rounded-[8px] border-2 border-#393C49 font-barlow font-normal text-semi-bold text-[#EA7C69] hover:bg-[#EA7C69] hover:text-[#FFFFFF] p-[7px, 12px, 7px, 12px]"><a href="/">To Go</a></button>
      <button className="flex items-center justify-center bg-[#1F1D2B] w-[74px] h-[34px] rounded-[8px] border-2 border-#393C49 font-barlow font-normal text-semi-bold text-[#EA7C69] hover:bg-[#EA7C69] hover:text-[#FFFFFF] p-[7px, 12px, 7px, 12px]"><a href="/">Delivery</a></button>
    </div>
    <div className="flex justify-between mt-[24px]">
       <h2 className="font-semi-bold font-barlow text-[#FFFFFF] text-[16px]">Item</h2>
       <div className="flex gap-[43px]">
        <h2 className="font-semi-bold font-barlow text-[#FFFFFF] text-[16px]">Qty</h2>
        <h2 className="font-semi-bold font-barlow text-[#FFFFFF] text-[16px]">Price</h2>
       </div>
    </div>
    <div className="mt-[24px] border border-#393C49"></div>
    <div className="mt-[24px]">
      <div className="flex gap-[10px] w-[361px] h-[48px] items-center">
        <img src="images/image(1).png" alt="image" className="w-[40px] h-[40px] "/>
         <div className="">
          <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm">Spicy seasoned sea...</h1>
          <h2 className="text-[#889898] font-medium font-barlow text-[12px]"> $ 2.29</h2>
         </div>
        <div className="flex gap-[13px]">
          <input type="text" className=" bg-[#2D303E] w-[48px] h-[48px] px-4 rounded-[8px] text-[#889898] ml-[55px] placeholder-gray-500" placeholder="2"/>

          <h2 className="text-[#FFFFFF] flex items-center ">$ 4,58</h2>
    
        </div>
       </div>
       <div className="flex justify-center gap-[16px] mt-[10px] ">
        <input type="text" className="bg-gray-800 w-auto h-12 rounded-md border border-gray-700 text-gray-300 font-barlow text-md pl-3 pr-24 placeholder-gray-500" placeholder="Please, just a little bit spicy only."/>
        <button className=" bg-[#1F1D2B] w-[48px] h-[48px] p-[14px] rounded-[8px] border border-[#FF7CA3] hover:bg-[#50343a]"><i className="fa-solid fa-trash-can text-[#FF7CA3] text-normal"></i></button>
      </div>
    </div>
    <div className="mt-[24px]">
      <div className="flex gap-[10px] w-[361px] h-[48px] items-center">
        <img src="images/image(2).png" alt="image" className="w-[40px] h-[40px] "/>
         <div className="">
          <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm whitespace-pre">Salted pasta with mu...</h1>
          <h2 className="text-[#889898] font-medium font-barlow text-[12px] "> $ 2.69</h2>
         </div>
         <input type="text" className=" bg-[#2D303E] w-[48px] h-[48px] px-4 rounded-[8px] text-[#889898] ml-[42px] placeholder-gray-500" placeholder="1"/>
         <h2 className="text-[#FFFFFF] flex items-center whitespace-pre">$ 2.69</h2>
    
       </div>
       <div className="flex justify-center gap-[16px] mt-[10px] ">
        <input type="text" className="bg-gray-800 w-72 h-12 rounded-md border border-gray-700 text-gray-300 font-barlow text-md pl-3 pr-24 placeholder-gray-500" placeholder="Order Note..."/>

        <button className="flex items-center justify-center bg-[#1F1D2B] w-[48px] h-[48px] p-[14px] rounded-[8px] border border-[#FF7CA3] hover:bg-[#50343a]"><i className="fa-solid fa-trash-can text-[#FF7CA3] text-normal"></i></button>
      </div>
    </div>
    <div className="mt-[24px]">
      <div className="flex gap-[10px] w-[361px] h-[48px] items-center">
        <img src="images/image(6).png" alt="image" className="w-[40px] h-[40px] "/>
         <div className="">
          <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm whitespace-pre">Spicy instant noodle...</h1>
          <h2 className="text-[#889898] font-medium font-barlow text-[12px]"> $ 3.49</h2>
         </div>
         <input type="text" className=" bg-[#2D303E] w-[48px] h-[48px] px-4 rounded-[8px] text-[#889898] ml-[46px] placeholder-gray-500" placeholder="3"/>
         <h2 className="text-[#FFFFFF] flex items-center whitespace-pre ">$ 10,47</h2>
    
       </div>
       <div className="flex justify-center gap-[16px] mt-[10px] ">
        <input type="text" className="bg-gray-800 w-72 h-12 rounded-md border border-gray-700 text-gray-300 font-barlow text-md pl-3 pr-24 placeholder-gray-500" placeholder="Order Note..."/>
        <button className="flex items-center justify-center bg-[#1F1D2B] w-[48px] h-[48px] p-[14px] rounded-[8px] border border-[#FF7CA3] hover:bg-[#50343a]"><i className="fa-solid fa-trash-can text-[#FF7CA3] text-normal"></i></button>
      </div>
    </div>
    <div className="mt-[24px]">
      <div className="flex gap-[10px] w-[361px] h-[48px] items-center">
        <img src="images/image(6).png" alt="image" className="w-[40px] h-[40px] "/>
         <div className="">
          <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm whitespace-pre">Healthy noodle with ...</h1>
          <h2 className="text-[#889898] font-medium font-barlow text-[12px]"> $ 3.29</h2>
         </div>
         <input type="text" className=" bg-[#2D303E] w-[48px] h-[48px] px-4 rounded-[8px] text-[#889898] ml-[42px] placeholder-gray-500" placeholder="1"/>
         <h2 className="text-[#FFFFFF] flex items-center whitespace-pre ">$ 3.29</h2>
     </div>
    </div>
    <div className="flex justify-between mt-[24px]">
      <h2 className="text-[#ABBBC2] font-barlow font-[400] text-[14px] ">Discount</h2> 
      <h2 className="font-barlow font-semi-bold text-[#FFFFFF] text-[16px]">$0</h2> 
    </div>
    <div className="flex justify-between mt-[16px]">
      <h2 className="text-[#ABBBC2] font-barlow font-[400] text-[14px] ">Sub total</h2> 
      <h2 className="font-barlow font-semi-bold text-[#FFFFFF] text-[16px]"> $ 21,03</h2> 
    </div>
    <div className="w-[361px] h-[48px] bg-[#EA7C69] p-[14px] rounded-[8px] flex items-center justify-center mt-[42px] hover:bg-[#50343a]">
      <button className="text-#FAFAFA font-barlow font-semi-bold ">Continue to Payment</button>
    </div>
  </div>
    </div>
  )
}

export default Orders