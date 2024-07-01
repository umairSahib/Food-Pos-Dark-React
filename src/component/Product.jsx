import React from 'react'

const Product = ({ myData }) => {
  const myObject = {
    parentName: 'No Gym',
    children: [
      {
        name: 'bands',
        label: 'Bands'
      },
      {
        name: 'jump-rope',
        label: 'Jump Rope'
      },
      {
        name: 'pvc-ripe-roller',
        label: 'Pvc Ripe Roller'
      },
      {
        name: 'foam-pad',
        label: 'Foam pad'
      },
      {
        name: 'mini-brands',
        label: 'Mini Brands'
      },
      {
        name: 'foam-roller',
        label: 'Foam Roller'
      },
      {
        name: 'sliders',
        label: 'Sliders'
      },
      {
        name: 'slant-board',
        label: 'Slant Board'
      },
      {
        name: 'dowel-rod',
        label: 'Dowel Rod'
      }
    ]
  }

  return (
    <div>
      <button onClick={() => myData(myObject)}>Object</button>
    </div>
  )
}

export default Product