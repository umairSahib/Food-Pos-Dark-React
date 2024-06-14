import React from 'react'
import SideBar from '../../component/sideBar'
import Dishes from '../../component/Dishes'
import Orders from '../../component/Orders'
const Home = () => {
  return (
    <div>
      <div className=" flex   mt-[35px]">
         <SideBar/>
        <Dishes/>
        {/* <Orders/> */}
 
       </div>
    </div>
  )
}

export default Home