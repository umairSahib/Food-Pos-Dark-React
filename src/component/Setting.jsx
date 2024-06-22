import React from 'react'

const Setting = () => {
  return (
    <div>
           <div className="bg-[#252836] w-full flex mt-[35px] h-[850px]">
  
  <div className="flex gap-[24px]">
      
  <div className="sidebar bg-[#1F1D2B]  basis-1/10 ">
      <div className="grid grid-cols-1 grid-rows-8 h-full">
        <div className="flex items-center justify-center bg-[#1F1D2B] w-full h-24">
          <div className="flex items-center justify-center bg-[#1F1D2B] rounded-tl-lg rounded-bl-lg w-24 h-20">
            <div className="flex items-center justify-center bg-[#543C3B]  rounded-lg w-14 h-14 p-4">
              <i className="fas fa-shop text-4xl flex items-center justify-center text-[#EA8069] cursor-pointer"></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#1F1D2B] w-full h-24">
          <div className="flex items-center justify-center bg-[#1F1D2B] hover:bg-[#252836] rounded-tl-lg rounded-bl-lg w-24 h-20">
            <div className="flex items-center justify-center bg-[#1F1D2B] rounded-lg active:bg-[#f8fafc] hover:bg-gray-600 cursor-pointer w-14 h-14 p-4">
              <i className="fas fa-house text-4xl text-[#EA7C69] flex items-center justify-center active:text-[#EA7C69]"></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#1F1D2B] w-full h-24">
          <div className="flex items-center justify-center bg-[#1F1D2B] hover:bg-[#252836] rounded-tl-lg rounded-bl-lg w-24 h-20">
            <div className="flex items-center justify-center bg-[#1F1D2B] rounded-lg active:bg-[#EA7C69] cursor-pointer w-14 h-14 p-4">
              <i className="fas fa-circle-dollar-to-slot text-4xl text-[#EA7C69] flex items-center justify-center active:text-[#f8fafc]"></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#1F1D2B] w-full h-24">
          <div className="flex items-center justify-center bg-[#1F1D2B] hover:bg-[#252836] rounded-tl-lg rounded-bl-lg w-24 h-20">
            <div className="flex items-center justify-center bg-[#1F1D2B] rounded-lg active:bg-[#EA7C69] cursor-pointer w-14 h-14 p-4">
              <i className="fas fa-gauge text-4xl text-[#EA7C69] flex items-center justify-center active:text-[#f8fafc]"></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#1F1D2B] w-full h-24">
          <div className="flex items-center justify-center bg-[#1F1D2B] hover:bg-[#252836] rounded-tl-lg rounded-bl-lg w-24 h-20">
            <div className="flex items-center justify-center bg-[#1F1D2B] rounded-lg active:bg-[#EA7C69] cursor-pointer w-14 h-14 p-4">
              <i className="fas fa-envelope text-4xl text-[#EA7C69] flex items-center justify-center active:text-[#f8fafc]"></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#1F1D2B] w-full h-24">
          <div className="flex items-center justify-center bg-[#1F1D2B] hover:bg-[#252836] rounded-tl-lg rounded-bl-lg w-24 h-20">
            <div className="flex items-center justify-center bg-[#1F1D2B] rounded-lg active:bg-[#EA7C69] cursor-pointer w-14 h-14 p-4">
              <i className="fas fa-bell text-4xl text-[#EA7C69] flex items-center justify-center active:text-[#f8fafc]"></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#1F1D2B] w-full h-24">
          <div className="flex items-center justify-center bg-[#1F1D2B] hover:bg-[#252836] rounded-tl-lg rounded-bl-lg w-24 h-20">
            <div className="flex items-center justify-center bg-[#EA7C69] rounded-lg active:bg-[#EA7C69] cursor-pointer w-14 h-14 p-4">
              <i className="fas  fa-gear text-4xl text-[#f8fafc] flex items-center justify-center active:text-[#f8fafc]"></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#1F1D2B] w-full h-24">
          <div className="flex items-center justify-center bg-[#1F1D2B] hover:bg-[#252836] rounded-tl-lg rounded-bl-lg w-24 h-20">
            <div className="flex items-center justify-center bg-[#1F1D2B] rounded-lg active:bg-[#EA7C69] cursor-pointer w-14 h-14 p-4">
              <i className="fas fa-right-from-bracket text-4xl text-[#EA7C69] flex items-center justify-center active:text-[#f8fafc]"></i>
            </div>
          </div>
        </div>

       
      </div>
      </div>
      
  
  </div>
   <div className="ml-[24px] w-1/3 ">
      <h1 className="font-barlow font-semibold text-[#FFFFFF] text-3xl mb-6 pt-[24px]">Settings</h1>
       
      <div className="bg-[#1F1D2B]  h-[723px] rounded">
         
  <button className="flex gap-3  items-center justify-center rounded px-6 py-4">
      <i className="fa-solid fa-heart text-[#889898] -mt-2"></i>
      <div className="text-left">
        <h1 className=" font-barlow font-medium text-[#FFFFFF]  text-sm">Appearance</h1>
        <h2 className="text-[#889898] font-normal font-barlow text-xs">Dark and Light mode, Font size</h2>
      </div>
    </button>
    
  <button className="flex gap-3  items-center justify-center rounded px-6 py-4">
      <i className="fa-solid fa-hotel text-[#889898] -mt-2"></i>
      <div className="text-left">
        <h1 className=" font-barlow font-medium text-[#FFFFFF]  text-sm">Your Restaurant</h1>
        <h2 className="text-[#889898] font-normal font-barlow text-xs">Dark and Light mode, Font size</h2>
      </div>
    </button>
    
  <button className="flex gap-3  items-center justify-center bg-[#54363B] rounded px-6 py-4">
      <i className="fa-brands fa-discourse text-[#EA7C69] -mt-2"></i>
      <div className="text-left">
        <h1 className=" font-barlow font-medium text-[#EA7C69]  text-sm">Products Management</h1>
        <h2 className="text-[#889898] font-normal font-barlow text-xs">Manage your product, pricing, etc</h2>
      </div>
    </button>
    <button className="flex gap-3  items-center justify-center rounded px-6 py-4">
      <i className="fas fa-bell text-[#889898] -mt-2"></i>
      <div className="text-left">
        <h1 className=" font-barlow font-medium text-[#FFFFFF]  text-sm">Notifications</h1>
        <h2 className="text-[#889898] font-normal font-barlow text-xs">Customize your notifications</h2>
      </div>
    </button>
    <button className="flex gap-3  items-center justify-center rounded  px-6 py-4">
      <i className="fa-solid fa-lock text-[#889898] -mt-2"></i>
      <div className="text-left">
        <h1 className=" font-barlow font-medium text-[#FFFFFF]  text-sm">Security</h1>
        <h2 className="text-[#889898] font-normal font-barlow text-xs">Configure Password, PIN, etc</h2>
      </div>
    </button>
    
   
    
    <button className="flex gap-3  items-center justify-center rounded  px-6 py-4">
      <i className="fa-solid fa-lock text-[#889898] -mt-2"></i>
      <div className="text-left">
        <h1 className=" font-barlow font-medium text-[#FFFFFF]  text-sm">Security</h1>
        <h2 className="text-[#889898] font-normal font-barlow text-xs">Configure Password, PIN, etc</h2>
      </div>
    </button>
    <button className="flex gap-3  items-center justify-center rounded  px-6 py-4">
      <i className="fa-solid fa-circle-info text-[#889898] -mt-2"></i>
      <div className="text-left">
        <h1 className=" font-barlow font-medium text-[#FFFFFF]  text-sm">About Us</h1>
        <h2 className="text-[#889898] font-normal font-barlow text-xs">Find out more about Posly</h2>
      </div>
    </button>
      
     </div>
   </div>
  
   <div className="bg-[#1F1D2B] w-2/3 h-[815px] ml-[24px] rounded  mr-[24px] ">
  
   <div className="flex justify-between items-center pt-[24px] pl-[24px] pr-[24px]">
      <h1 className="text-[#FFFFFF] text-xl font-barlow font-semibold">Products Management</h1>
      <button className= " flex gap-1 items-center justify-center p-4 bg-#211E2D border border-[#393C49] rounded text-[#FFFFFF] text-sm font-barlow font-semibold" ><i className="fa-solid fa-grip-lines text-[#FFFFFF]"></i>Manage Categories</button>
   </div>
   <div className="flex gap-8 mt-6 border-b border-[#393C49] ml-[24px]">
      <button className="text-[#EA7C69] font-barlow font-[600] text-sm border-b-2 border-[#EA7C69]"> <a href="">Hot Dishes</a></button>
      <button className="text-[#FFFFFF] font-barlow font-[600] text-sm"> <a href="">Cold Dishes</a></button>
      <button className="text-[#FFFFFF] font-barlow font-[600] text-sm"> <a href="">Soup</a></button>
      <button className="text-[#FFFFFF] font-barlow font-[600] text-sm"> <a href="">Grill</a></button>
      <button className="text-[#FFFFFF] font-barlow font-[600] text-sm"> <a href="">Appetizer</a></button>
      <button className="text-[#FFFFFF] font-barlow font-[600] text-sm"> <a href="">Dessert</a></button>
  </div>
  
  <div className="flex gap-4 mt-6 ml-6 mr-6">
      <div className="flex flex-col items-center justify-center w-56 h-72 border border-dashed border-[#EA7C69]">
          <button className="bg-[#1F1D2B] w-12 h-12 p-4 rounded hover:bg-[#50343a]">
              <i className="fa-solid fa-plus text-[#EA7C69] text-normal"></i>
          </button>
          <h1 className="text-[#EA7C69] text-base font-barlow font-semibold mt-[20px]">
              Add new dish
          </h1>
      </div>
      <div className="bg-[#1F1D2B]  rounded-lg border border-[#393C49] w-56 h-72" >
          <div className="flex justify-center mt-6">
             <img src="images/hotdish2.png" alt="image" />
              
          </div>
          <div className="mt-4 flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Spicy seasoned </div>
          <div className="mt-0 flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm"> seafood noodles </div>
          <div className="mt-2 flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm"> $ 2.29 20 Bowls </div>
     
          <div className="flex justify-center items-center mt-2 bg-[#50343a] rounded-bl-xl rounded-br-xl rounded-tl-0 rounded-tr-0 p-4">
             <i className="fa-solid fa-pen flex justify-center items-center text-[#EA7C69]"></i>
             <div className="font-barlow font-semibold text-sm text-[#EA7C69]">Edit dish</div>
           </div>
           
         </div>
         <div className="bg-[#1F1D2B]  rounded-lg border border-[#393C49] w-56 h-72" >
          <div className="flex justify-center mt-6">
             <img src="images/hotdish4.png" alt="image" />
              
          </div>
          <div className="mt-4 flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Salted Pasta with</div>
          <div className="mt-0 flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">  mushroom sauce </div>
          <div className="mt-2 flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm"> $ 2.69 30 Bowls </div>
     
          <div className="flex justify-center items-center mt-2 bg-[#50343a] rounded-bl-xl rounded-br-xl rounded-tl-0 rounded-tr-0 p-4">
             <i className="fa-solid fa-pen flex justify-center items-center text-[#EA7C69]"></i>
             <div className="font-barlow font-semibold text-sm text-[#EA7C69]">Edit dish</div>
           </div>
           
         </div>
      
  </div>
  <div className="flex gap-4 mt-6 ml-6 mr-6">
      
      <div className="bg-[#1F1D2B]  rounded-lg border border-[#393C49] w-56 h-72" >
          <div className="flex justify-center mt-6">
             <img src="images/hotdish10.png" alt="image" />
              
          </div>
          <div className="mt-4 flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Spicy seasoned </div>
          <div className="mt-0 flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm"> seafood noodles </div>
          <div className="mt-2 flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm"> $ 2.29 20 Bowls </div>
     
          <div className="flex justify-center items-center mt-2 bg-[#50343a] rounded-bl-xl rounded-br-xl rounded-tl-0 rounded-tr-0 p-4">
             <i className="fa-solid fa-pen flex justify-center items-center text-[#EA7C69]"></i>
             <div className="font-barlow font-semibold text-sm text-[#EA7C69]">Edit dish</div>
           </div>
           
         </div>
         <div className="bg-[#1F1D2B]  rounded-lg border border-[#393C49] w-56 h-72" >
          <div className="flex justify-center mt-6">
             <img src="images/hotdish13.png" alt="image" />
              
          </div>
          <div className="mt-[32px] flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Beef dumpling in hot </div>
          <div className="mt-0 flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">  and sour soup </div>
          <div className="mt-2 flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm"> $ 2.99 16 Bowls </div>
     
          <div className="flex justify-center items-center mt-2 bg-[#50343a] rounded-bl-xl rounded-br-xl rounded-tl-0 rounded-tr-0 p-4">
             <i className="fa-solid fa-pen flex justify-center items-center text-[#EA7C69]"></i>
             <div className="font-barlow font-semibold text-sm text-[#EA7C69]">Edit dish</div>
           </div>
           
         </div>
         <div className="bg-[#1F1D2B]  rounded-lg border border-[#393C49] w-56 h-72" >
          <div className="flex justify-center mt-6">
             <img src="images/hotdish8.png" alt="image" />
              
          </div>
          <div className="mt-4 flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm">Hot spicy fried  </div>
          <div className="mt-0 flex justify-center text-[#FFFFFF] font-barlow font-medium text-sm"> rice with omelet </div>
          <div className="mt-2 flex justify-center text-[#ABBBC2] font-barlow font-normal text-sm"> $ 3.49 13 Bowls </div>
     
          <div className="flex justify-center items-center mt-2 bg-[#50343a] rounded-bl-xl rounded-br-xl rounded-tl-0 rounded-tr-0 p-4">
             <i className="fa-solid fa-pen flex justify-center items-center text-[#EA7C69]"></i>
             <div className="font-barlow font-semibold text-sm text-[#EA7C69]">Edit dish</div>
           </div>
           
         </div>
  </div>
   </div>
  </div>
    </div>
  )
}

export default Setting