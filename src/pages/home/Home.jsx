import React, { useState } from 'react'
import Product from '../../component/Product'

const Home = () => {
  const [object, setObject] = useState('')

  function myParentData(data) {
    
    setObject(data)
    
  }

  return (
    <>
   
      <Product myData={myParentData} />
    </>
  )
}

export default Home
