import React from 'react'

const sideBar = () => {
  return (
   <>        {/* SideBar */}
     <div className="sidebar bg-[#1F1D2B] ">
      <div className="grid grid-cols-1 grid-rows-8 h-full">
        <div className="flex items-center justify-center bg-[#1F1D2B] w-full h-24">
          <div className="flex items-center justify-center bg-[#1F1D2B] rounded-tl-lg rounded-bl-lg w-24 h-20">
            <div className="flex items-center justify-center bg-[#543C3B]  rounded-lg  p-4">
              <i className="fas fa-shop text-4xl flex items-center justify-center text-[#EA8069] cursor-pointer"></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#1F1D2B] w-full h-24">
          <div className="flex items-center justify-center bg-[#1F1D2B] hover:bg-[#252836] rounded-tl-lg rounded-bl-lg w-24 h-20">
            <div className="flex items-center justify-center bg-[#EA7C69] rounded-lg active:bg-[#EA7C69]  cursor-pointer p-4">
              <i className="fas fa-house text-4xl text-[#f8fafc] flex items-center justify-center active:text-[#f8fafc]"></i>
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
            <div className="flex items-center justify-center bg-[#1F1D2B] rounded-lg active:bg-[#EA7C69] cursor-pointer w-14 h-14 p-4">
              <i className="fas  fa-gear text-4xl text-[#EA7C69] flex items-center justify-center active:text-[#f8fafc]"></i>
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
   </>

  )
}

export default sideBar