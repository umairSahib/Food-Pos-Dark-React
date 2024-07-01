import React from 'react'

const Product = ({ myData }) => {
  const equipment = [
    {
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
            },
           
        ]
    },
    {
        parentName: 'Home Gym',
        children: [
            {
                name: 'barbell',
                label: 'Barbell'    
            },
            {
                name: 'dumbbells',
                label: 'Dumbbells'            
            },
            {
                name: 'squat-rack',
                label: 'Squat Rack'  
            },
            {
                name: 'plates',
                label: 'Plates'  
            },
            {
                name: 'flat-bench',
                label: 'Flat Bench'  
            },
            {
                name: 'adjustable-bench',
                label: 'Adjustable Bench'  
            },
            {
                name: 'boxes',
                label: 'Boxes'  
            },
            {
                name: 'mini-hurdles',
                label: 'Mini Hurdles'  
            },
            {
                name: 'medballs',
                label: 'Medballs'  
            },
            {
                name: 'pull-up-bar',
                label: 'Pull Up Bar'  
            },
            {
                name: 'weight-belt',
                label: 'Weight Belt'  
            },
            {
                name: 'fat-grips',
                label: 'Fat Grips'  
            },
            {
                name: 'ab-wheel',
                label: 'Ab Wheel'  
            },
            {
                name: 'forearm-roller',
                label: 'Forearm Roller'  
            },
        ]
    },
    {
        parentName: 'Local Gym',
        children: [
            {
                name: 'bumper-plates',
                label: 'Bumper Plates'    
            },
            {
                name: 'decline-bench',
                label: 'Decline Bench'            
            },
            {
                name: 'cable-machine',
                label: 'Cable Machine'  
            },
            {
                name: 'back-extension(roman-chair)',
                label: 'Back Extension(Roman Chair)'  
            },
            {
                name: 'trap-bar',
                label: 'Trap Bar'  
            },
            {
                name: 'kettlebells',
                label: 'Kettlebells'  
            },
            {
                name: 'dip-bar',
                label: 'Dip Bar'  
            },
            {
                name: 'lat-pull-down',
                label: 'Lat Pull Down'  
            },
            {
                name: 'preacher-bench',
                label: 'Preacher Bench'  
            },
            {
                name: 'neutral-grip-attachment',
                label: 'Neutral Grip Attachment'  
            },
            {
                name: 'leg-curl',
                label: 'Leg Curl'  
            },
            {
                name: 'leg-extension',
                label: 'Leg Extension'  
            },
            {
                name: 'leg-press',
                label: 'Leg Press'  
            },
            {
                name: 'ez-curl-bar',
                label: 'Ez Curl Bar'  
            },
        ]
    },
    {
        parentName: 'Full Gym',
        children: [
            {
                name: 'high-bench',
                label: 'High Bench'    
            },
            {
                name: 'reverse-hyper',
                label: 'Reverse Hyper'            
            },
            {
                name: 'glute-ham',
                label: 'Glute Ham'  
            },
            {
                name: 'jerk-boxes',
                label: 'Jerk Boxes'  
            },
            {
                name: 'sprint-harness + sled',
                label: 'Sprint Harness + Sled'  
            },
            {
                name: 'hurdles',
                label: 'Hurdles'  
            },
            {
                name: 'sled',
                label: 'Sled'  
            },
            {
                name: 'single-leg-squat-stand',
                label: 'Single Leg Squat Stand'  
            },
            {
                name: 'pulling-blocks',
                label: 'Pulling Blocks'  
            },
            {
                name: 'pull-up-rings',
                label: 'Pull Up Rings'  
            },
            {
                name: 'stationary-bike',
                label: 'Stationary Bike'  
            },
            {
                name: 'elliptical',
                label: 'Elliptical'  
            },
            {
                name: 'rower',
                label: 'Rower'  
            },
            {
                name: 'swimming-pool',
                label: 'Swimming Pool'  
            },
            {
                name: 'bicycle',
                label: 'Bicycle'  
            },
            {
                name: 'fan-bike',
                label: 'Fan Bike'  
            },
        ]
    },
]

  return (
    <div>
      <button onClick={() => myData(equipment )}>Object</button>
    </div>
  )
}

export default Product