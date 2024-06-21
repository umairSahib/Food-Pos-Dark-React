import React from 'react'
import SideBar from '../../component/sideBar'
import Tabs from '../../component/tabs'
import Dishes from '../../component/Dishes'

const Home = () => {
  return (
    <div>
      <div className="flex">
        <SideBar/>
        <Dishes />
      </div>
    
    </div>
  )
}

export default Home
