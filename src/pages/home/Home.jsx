import React from 'react'
import SideBar from '../../component/sideBar'

import Dish from '../../component/dish'
import Drawer from '../../component/drawer'

const Home = () => {
  return (
    <>
      <div className="flex">
        <SideBar/>
        <Dish />
      </div>
     <Drawer/>
    </>
  )
}

export default Home
