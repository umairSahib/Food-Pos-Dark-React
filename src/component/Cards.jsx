import { useState } from 'react'
import React from 'react'

const Cards = () => {
  const [cart, setCart] = useState([])
console.log(cart);

  return (
    <div>
      <button onClick={() => setCart([...cart, {id: 1, name: "hot and sour", }])}>Add to cart</button>

    </div>
  )
}

export default Cards