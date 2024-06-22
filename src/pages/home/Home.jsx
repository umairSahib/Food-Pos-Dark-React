import React from 'react'
import SideBar from '../../component/sideBar'

import Dish from '../../component/dish'
import Orders from '../../component/Orders'
import Jaegar from '../../component/jaegar'


const Home = () => {
  return (
    <>
      <div className="flex">
        <SideBar/>
        <Dish />
      </div>
      <Jaegar/>
    </>
  )
}

export default Home
