import { useState } from 'react';
import React from 'react'


const Cards = () => {
  const [cart, setCart] = useState([])
  const newArray=[
    {id: 1, name: "hot and sour", quantity:12,},
    {id: 2, name: "hot and sour", quantity:13,},
    {id: 3, name: "hot and sour", quantity:14,}
  ]
 console.log(cart);
  return (
    <div>
      <button onClick={() => setCart(...cart, )}>Add to cart</button>
       <button onClick={() => setCart(...cart, )}>Add to cart</button>
       <button onClick={() => setCart(...cart, )}>Add to cart</button>

    </div>
  )
}

export default Cards


