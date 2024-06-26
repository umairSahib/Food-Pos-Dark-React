import { useState } from 'react';
import React from 'react'


const Cards = () => {
  const [cart, setCart] = useState([])
  console.log("🚀 ~ Cards ~ cart:", cart)
  const newArray=[
    {id: 1, name: "hot and sour", quantity:12,},
    {id: 2, name: "hot and sour", quantity:13,},
    {id: 3, name: "hot and sour", quantity:14,}
  ]

function handleClick(item){
  const filterData= cart.filter((obj)=>obj.id !== item.id) 
  
  setCart([...filterData, item])
}

  return (
    <div>
      {
        newArray.map((item)=>(
          <button onClick={()=>handleClick(item)}>Add to cart</button>

        ))
      }
       

    </div>
  )
}

export default Cards



