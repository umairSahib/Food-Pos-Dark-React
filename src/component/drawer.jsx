import React from 'react'

const drawer = () => {
  return (
    <>
       <div className="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <div className=" flex ">
      
   
      <div className="bg-[#1F1D2B] w-96 h-auto rounded-tr-8 rounded-br-8 pt-6 pl-6 pr-6">
        <h1 className="font-barlow font-semi-bold text-[20px] text-[#FFFFFF]">Orders #34562</h1>
        <div className="flex gap-2 mt-6">
          <button className="flex items-center justify-center bg-[#EA7C69]  rounded-lg font-barlow font-normal text-semi-bold text-[#FFFFFF] hover:bg-[#50343a] pt-2 pr-3 pb-2 pl-3 " ><a href="/">Dine In</a></button>
          <button className="flex items-center justify-center bg-[#1F1D2B]  rounded-lg border-2 border-[#393C49] font-barlow font-normal text-semi-bold text-[#EA7C69] hover:bg-[#EA7C69] hover:text-[#FFFFFF] pt-2 pr-3 pb-2 pl-3 "><a href="/">To Go</a></button>
          <button className="flex items-center justify-center bg-[#1F1D2B]  rounded-lg border-2 border-[#393C49] font-barlow font-normal text-semi-bold text-[#EA7C69] hover:bg-[#EA7C69] hover:text-[#FFFFFF] pt-2 pr-3 pb-2 pl-3 " ><a href="/">Delivery</a></button>
        </div>
        <div className="flex justify-between mt-6">
           <h2 className="font-semi-bold font-barlow text-[#FFFFFF] text-base">Item</h2>
           <div className="flex gap-11">
            <h2 className="font-semi-bold font-barlow text-[#FFFFFF] text-base">Qty</h2>
            <h2 className="font-semi-bold font-barlow text-[#FFFFFF] text-base">Price</h2>
           </div>
        </div>
        <div className="mt-6 border border-[#393C49]"></div>
        <div className="mt-6">
          <div className="flex gap-3 w-96 h-12 items-center">
            <img src="images/image(1).png" alt="image" className="w-10 h-10 "/>
             <div className="">
              <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm">Spicy seasoned sea...</h1>
              <h2 className="text-[#889898] font-medium font-barlow text-xs"> $ 2.29</h2>
             </div>
            <div className="flex gap-3">
              <input type="text" className=" bg-[#2D303E] w-12 h-12 px-4 rounded-lg text-[#889898] ml-[55px] placeholder-gray-500" placeholder="2"/>
    
              <h2 className="text-[#FFFFFF] flex items-center ">$ 4,58</h2>
        
            </div>
           </div>
           <div className="flex justify-center gap-4 mt-2 ">
            <input type="text" className="bg-gray-800 w-auto h-12 rounded-md border border-gray-700 text-gray-300 font-barlow text-md pl-3 pr-24 placeholder-gray-500" placeholder="Please, just a little bit spicy only."/>
            <button className=" bg-[#1F1D2B] w-12 h-12 p-4 rounded-lg border border-[#FF7CA3] hover:bg-[#50343a]"><i className="fa-solid fa-trash-can text-[#FF7CA3] text-normal"></i></button>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex gap-3 w-96 h-12 items-center">
            <img src="images/image(2).png" alt="image" className="w-10 h-10 "/>
             <div className="">
              <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm whitespace-pre">Salted pasta with mu...</h1>
              <h2 className="text-[#889898] font-medium font-barlow text-xs "> $ 2.69</h2>
             </div>
             <input type="text" className=" bg-[#2D303E] w-12 h-12 px-4 rounded-lg text-[#889898] ml-[42px] placeholder-gray-500" placeholder="1"/>
             <h2 className="text-[#FFFFFF] flex items-center whitespace-pre">$ 2.69</h2>
        
           </div>
           <div className="flex justify-center gap-4 mt-2 ">
            <input type="text" className="bg-gray-800 w-72 h-12 rounded-md border border-gray-700 text-gray-300 font-barlow text-md pl-3 pr-24 placeholder-gray-500" placeholder="Order Note..."/>
    
            <button className="flex items-center justify-center bg-[#1F1D2B] w-12 h-12 p-4 rounded-lg border border-[#FF7CA3] hover:bg-[#50343a]"><i className="fa-solid fa-trash-can text-[#FF7CA3] text-normal"></i></button>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex gap-3 w-96 h-12 items-center">
            <img src="images/image(6).png" alt="image" className="w-10 h-10 "/>
             <div className="">
              <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm whitespace-pre">Spicy instant noodle...</h1>
              <h2 className="text-[#889898] font-medium font-barlow text-xs"> $ 3.49</h2>
             </div>
             <input type="text" className=" bg-[#2D303E] w-12 h-12 px-4 rounded-lg text-[#889898] ml-[46px] placeholder-gray-500" placeholder="3"/>
             <h2 className="text-[#FFFFFF] flex items-center whitespace-pre ">$ 10,47</h2>
        
           </div>
           <div className="flex justify-center gap-4 mt-2 ">
            <input type="text" className="bg-gray-800 w-72 h-12 rounded-md border border-gray-700 text-gray-300 font-barlow text-md pl-3 pr-24 placeholder-gray-500" placeholder="Order Note..."/>
            <button className="flex items-center justify-center bg-[#1F1D2B] w-12 h-12 p-4 rounded-lg border border-[#FF7CA3] hover:bg-[#50343a]"><i className="fa-solid fa-trash-can text-[#FF7CA3] text-normal"></i></button>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex gap-3 w-96 h-12 items-center">
            <img src="images/image(6).png" alt="image" className="w-10 h-10 "/>
             <div className="">
              <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm whitespace-pre">Healthy noodle with ...</h1>
              <h2 className="text-[#889898] font-medium font-barlow text-xs"> $ 3.29</h2>
             </div>
             <input type="text" className=" bg-[#2D303E] w-12 h-12 px-4 rounded-lg text-[#889898] ml-[42px] placeholder-gray-500" placeholder="1"/>
             <h2 className="text-[#FFFFFF] flex items-center whitespace-pre ">$ 3.29</h2>
         </div>
        </div>
        <div className="flex justify-between mt-6">
          <h2 className="text-[#ABBBC2] font-barlow font-normal text-sm ">Discount</h2> 
          <h2 className="font-barlow font-semi-bold text-[#FFFFFF] text-base">$0</h2> 
        </div>
        <div className="flex justify-between mt-4">
          <h2 className="text-[#ABBBC2] font-barlow font-normal text-sm ">Sub total</h2> 
          <h2 className="font-barlow font-semi-bold text-[#FFFFFF] text-base"> $ 21,03</h2> 
        </div>
        <div className="w-[361px] h-[48px] bg-[#EA7C69] p-4 rounded-lg flex items-center justify-center mt-[42px] hover:bg-[#50343a]">
          <button className="text-#FAFAFA font-barlow font-semi-bold ">Continue to Payment</button>
        </div>
      </div>
    </div>
     
      <label for="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
    </div> 
    <div className="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
      <div className="w-[814px] h-[834px] bg-[#1F1D2B] p-[24px] flex gap-8">
        <div className=" flex-1 ">
            <i className="fa-solid fa-arrow-left text-[#FFFFFF]"></i>
            <div className="flex gap-32 items-center mt-4 ">
                <div>
                    <h1 className="text-[#FFFFFF] font-barlow font-semibold text-[28px]">Confirmation</h1>
                    <h2 className="text-[#ABBBC2] font-barlow font-medium text-base mt-2">Orders #34562</h2>
                </div>
                <button className="bg-[#EA7C69] w-12 h-12 p-4 rounded-lg hover:bg-[#50343a]">
                    <i className="fa-solid fa-plus text-[#FFFFFF]"></i>
                </button>
            </div>
            <div className="border border-[#393C49] mt-6 mr-6"></div>
      
    
            <div className="mt-6">
                <div className="flex gap-3 w-96 h-12 items-center">
                  <img src="images/image(1).png" alt="image" className="w-10 h-10 "/>
                   <div className="">
                    <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm">Spicy seasoned sea...</h1>
                    <h2 className="text-[#889898] font-medium font-barlow text-xs"> $ 2.29</h2>
                   </div>
                  <div className="flex gap-3">
                    <input type="text" className=" bg-[#2D303E] w-12 h-12 px-4 rounded-lg text-[#889898] ml-[55px] placeholder-gray-500" placeholder="2"/>
          
                    <h2 className="text-[#FFFFFF] flex items-center ">$ 4,58</h2>
              
                  </div>
                 </div>
                 <div className="flex  gap-4 mt-2 ">
                  <input type="text" className="bg-gray-800 w-auto h-12 rounded-md border border-gray-700 text-gray-300 font-barlow text-md pl-3 pr-24 placeholder-gray-500" placeholder="Please, just a little bit spicy only."/>
                  <button className=" bg-[#1F1D2B] w-12 h-12 p-4 rounded-lg border border-[#FF7CA3] hover:bg-[#50343a]"><i className="fa-solid fa-trash-can text-[#FF7CA3] text-normal"></i></button>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-3 w-96 h-12 items-center">
                  <img src="images/image(2).png" alt="image" className="w-10 h-10 "/>
                   <div className="">
                    <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm whitespace-pre">Salted pasta with mu...</h1>
                    <h2 className="text-[#889898] font-medium font-barlow text-xs "> $ 2.69</h2>
                   </div>
                   <input type="text" className=" bg-[#2D303E] w-12 h-12 px-4 rounded-lg text-[#889898] ml-[42px] placeholder-gray-500" placeholder="1"/>
                   <h2 className="text-[#FFFFFF] flex items-center whitespace-pre">$ 2.69</h2>
              
                 </div>
                 <div className="flex  gap-4 mt-2 ">
                  <input type="text" className="bg-gray-800 w-72 h-12 rounded-md border border-gray-700 text-gray-300 font-barlow text-md pl-3 pr-24 placeholder-gray-500" placeholder="Order Note..."/>
          
                  <button className="flex items-center justify-center bg-[#1F1D2B] w-12 h-12 p-4 rounded-lg border border-[#FF7CA3] hover:bg-[#50343a]"><i className="fa-solid fa-trash-can text-[#FF7CA3] text-normal"></i></button>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-3 w-96 h-12 items-center">
                  <img src="images/image(6).png" alt="image" className="w-10 h-10 "/>
                   <div className="">
                    <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm whitespace-pre">Spicy instant noodle...</h1>
                    <h2 className="text-[#889898] font-medium font-barlow text-xs"> $ 3.49</h2>
                   </div>
                   <input type="text" className=" bg-[#2D303E] w-12 h-12 px-4 rounded-lg text-[#889898] ml-[46px] placeholder-gray-500" placeholder="3"/>
                   <h2 className="text-[#FFFFFF] flex items-center whitespace-pre ">$ 10,47</h2>
              
                 </div>
                 <div className="flex  gap-4 mt-2 ">
                  <input type="text" className="bg-gray-800 w-72 h-12 rounded-md border border-gray-700 text-gray-300 font-barlow text-md pl-3 pr-24 placeholder-gray-500" placeholder="Order Note..."/>
                  <button className="flex items-center justify-center bg-[#1F1D2B] w-12 h-12 p-4 rounded-lg border border-[#FF7CA3] hover:bg-[#50343a]"><i className="fa-solid fa-trash-can text-[#FF7CA3] text-normal"></i></button>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-3 w-96 h-12 items-center">
                  <img src="images/image(6).png" alt="image" className="w-10 h-10 "/>
                   <div className="">
                    <h1 className="text-[#FFFFFF] font-barlow font-medium text-sm whitespace-pre">Healthy noodle with ...</h1>
                    <h2 className="text-[#889898] font-medium font-barlow text-xs"> $ 3.29</h2>
                   </div>
                   <input type="text" className=" bg-[#2D303E] w-12 h-12 px-4 rounded-lg text-[#889898] ml-[42px] placeholder-gray-500" placeholder="1"/>
                   <h2 className="text-[#FFFFFF] flex items-center whitespace-pre ">$ 3.29</h2>
               </div>
               <div className="flex  gap-4 mt-2 ">
                <input type="text" className="bg-gray-800 w-72 h-12 rounded-md border border-gray-700 text-gray-300 font-barlow text-md pl-3 pr-24 placeholder-gray-500" placeholder="Order Note..."/>
                <button className="flex items-center justify-center bg-[#1F1D2B] w-12 h-12 p-4 rounded-lg border border-[#FF7CA3] hover:bg-[#50343a]"><i className="fa-solid fa-trash-can text-[#FF7CA3] text-normal"></i></button>
              </div>
              </div>
              <div className="border border-[#393C49] mt-6 mb-6"></div>
              <div className="flex gap-64 mt-6">
                <h2 className="text-[#ABBBC2] font-barlow font-normal text-sm ">Discount</h2> 
                <h2 className="font-barlow font-semi-bold text-[#FFFFFF] text-base">$0</h2> 
              </div>
              <div className="flex gap-60  mt-4">
                <h2 className="text-[#ABBBC2] font-barlow font-normal text-sm ">Sub total</h2> 
                <h2 className="font-barlow font-semi-bold text-[#FFFFFF] text-base"> $ 21,03</h2> 
              </div>
             
            </div>
    
    
            <div className=" flex-1">
                <h1 className="text-[28px] mt-10 font-barlow font-semibold text-[#FFFFFF]">Payement</h1>
               
                <h2 className="text-base mt-2 font-barlow font-semibold text-[#ABBBC2]">3 payment method available</h2>
                <div className="border border-[#393C49] mt-6 mr-6 mb-[24px]"></div>
                <h1 className="text-[#FFFFFF] font-barlow font-semi-bold text-[20px]">Payment Method</h1>
             <div className="flex mt-4 gap-2">
                <button className="relative bg-[#1F1D2B] text-white w-[101px] h-[64px] p-3 rounded-lg font-barlow text-sm border border-[#ABBBC2] flex flex-col items-center justify-center hover:bg-[#EA7C69]">
                    <div className="flex justify-end w-full">
                        <i className="fa-solid fa-circle-check text-[#EA7C69] transform translate-y-[-50%] translate-x-[50%] hover:bg-[#FFFFFF]"></i> 
                    </div>
                    <i className="fa-solid fa-id-card mb-1"></i> 
                    <span className="self-center w-full text-center">Credit Card</span>
                </button>
                 
                    <button className=" bg-[#1F1D2B] text-white w-[101px] h-[64px] p-3 rounded-lg font-barlow text-sm border border-[#ABBBC2] flex flex-col items-center justify-center hover:bg-[#EA7C69]  " >
                      
                      <i className="fa-brands fa-paypal text-[#ABBBC2] text-2xl"></i>
                        <span className="self-center w-full text-center text-[#ABBBC2]  font-barlow font-normal text-sm"><a href="">Paypal</a></span>
                    </button>
                    <button className=" bg-[#1F1D2B] text-white w-[101px] h-[64px] p-3 rounded-lg font-barlow text-sm border border-[#ABBBC2] flex flex-col items-center justify-center hover:bg-[#EA7C69] ">
                      
                      <i className="fa-solid fa-wallet text-[#ABBBC2] text-2xl"></i>
                        <span className="self-center w-full text-center text-[#ABBBC2]  font-barlow font-normal text-sm"><a href="">Paypal</a></span>
                    </button>
                </div>
                <div className="mt-4">
                    <h2 className="font-medium font-barlow text-sm text-[#FFFFFF]">Cardholder Name</h2>
                    <input type="text" placeholder="Levi Ackerman" className="w-[357px] h-[48px] rounded-lg p-4 border border-[#393C49] bg-[#2D303E] mt-2"/>
                 </div>
                <div className="mt-4">
                    <h2 className="font-normal font-barlow text-sm text-[#FFFFFF]">Card Number</h2>
                    <input type="text" placeholder="2564 1421 0897 1244" className="w-[357px] h-[48px] text-#E0E6E9 rounded-lg p-4 border border-[#393C49] bg-[#2D303E] mt-2"/>
                 </div>
                <div className="flex gap-3">
                    <div className="mt-4">
                        <h2 className="font-normal font-barlow text-sm text-[#FFFFFF]">Expiration Date</h2>
                        <input type="number" placeholder="02/2022" className="w-[172px] h-[48px] text-#E0E6E9 rounded-lg p-4 border border-[#393C49] bg-[#2D303E] mt-2"/>
                     </div>
                    <div className="mt-4">
                        <h2 className="font-normal font-barlow text-sm text-[#FFFFFF]">CVV</h2>
                        <input type="password" placeholder="..." className="w-[172px] h-[48px] text-#E0E6E9 rounded-lg p-4 border border-[#393C49] bg-[#2D303E] mt-2"/>
                     </div>
                    
                </div>
                <div className="mt-4 border border-[#393C49]"></div>
                <div className="flex gap-3">
                    <div className="mt-4">
                        <h2 className="font-normal font-barlow text-sm text-[#FFFFFF]">Order Type</h2>
                        <button className="flex items-center mt[8px] whitespace-pre gap-3 bg-[#1F1D2B] text-[#FFFFFF] w-[172px] h-[48px] p-4 rounded-lg font-barlow font-normal text-medium hover:bg-[#EA7C69] border border-[#393C49]"><i className="fa-solid fa-angle-down text-[#FFFFFF]"></i>Dine In</button>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-normal font-barlow text-sm text-[#FFFFFF]">Table no.</h2>
                        <input type="password" placeholder="140" className="w-[172px] h-[48px] text-#E0E6E9 rounded-lg p-4 border border-[#393C49] bg-[#2D303E] mt-2"/>
                     </div>
                    
                    </div>
             </div>
            
            </div>
    </div>
  </div>
    </>
  )
}

export default drawer