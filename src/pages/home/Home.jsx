import React from 'react'
import SideBar from '../../component/sideBar'
import Dishes from '../../component/Dishes'
import Tabs from '../../component/tabs'
import ColdDishes from '../../component/coldDishes'
// import Jaegar from '../../component/jaegar'
// import ChooseDishes from '../../component/chooseDishes'

const Home = () => {
  return (
    <div>
      <div className=" flex   mt-[35px]">
         <SideBar/>
        <Dishes/>
       
       
        {/* <Orders/> */}
 
       </div>
       {/* <Jaegar/> */}
       {/* <ChooseDishes/> */}
       <Tabs/>
       <ColdDishes/>
    </div>
  )
}

export default Home