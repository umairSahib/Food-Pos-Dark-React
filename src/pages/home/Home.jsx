import React from 'react'
import SideBar from '../../component/sideBar'

import Dish from '../../component/dish'
import Orders from '../../component/Orders'


const Home = () => {
  return (
    <div>
      <div className="flex">
        <SideBar/>
        <Dish />
      </div>
     <Orders/>
    </div>
  )
}

export default Home
