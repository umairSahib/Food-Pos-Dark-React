import React from 'react'
import SideBar from '../../component/sideBar'
import Dishes from '../../component/Dishes'
// import Jaegar from '../../component/jaegar'

const Home = () => {
  return (
    <div>
      <div className=" flex   mt-[35px]">
         <SideBar/>
        <Dishes/>
       
        {/* <Orders/> */}
 
       </div>
       {/* <Jaegar/> */}
    </div>
  )
}

export default Home