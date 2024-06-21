import React from 'react'
import SideBar from '../../component/sideBar'

import Dish from '../../component/dish'

const Home = () => {
  return (
    <div>
      <div className="flex">
        <SideBar/>
        <Dish />
      </div>
    
    </div>
  )
}

export default Home
