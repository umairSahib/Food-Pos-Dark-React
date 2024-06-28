import { useState } from 'react';
import React from 'react'


const Cards = () => {
  const [cart, setCart] = useState([])
 



  return (
    <div>
          <button onClick={()=>setCart([...cart,{id:1,name:"hot and cool",}])}>Add to cart</button>
          <button onClick={()=>setCart([...cart,{id:2,name:"hot Shawarma",}])}>Add to cart</button>
          <button onClick={()=>setCart([...cart,{id:3,name:"hot Daisy Food",}])}>Add to cart</button>
    

    </div>
  )
}

export default Cards



