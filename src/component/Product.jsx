import React from 'react';

const Product = (props) => {
  console.log("🚀 ~ Product ~ props:", props)

  
  return (
    <div>
       {
        props.equipment.map((item,index)=>(
            <div > 
            <div className='font-bold' key={index}>{item.parentName}</div>
            {
                item.children.map((item,index)=>(
                    <div className='pl-4' key={index}>{item.label}</div>
                ))
            }
            </div>
           
        ))
       }
    </div>
  );
};

export default Product;
