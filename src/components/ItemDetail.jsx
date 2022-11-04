import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Item from "./item";

export const ItemDetail = () => {

  const [stock, setStock] = useState([]);

useEffect(()=> {
  fetch('/data/stock.json')
  .then(res=> res.json())
  .then((resJson) => {
setTimeout(()=> {
  console.log(`logfetch`, resJson);
  setStock(resJson)
}, 2000);
  })
  .catch((e)=> {
    console.log(e);
  })
  .finally(()=> {
    console.log("finally");
  })
},[])
  return (
    stock.map(item => {
      return(
      <div className='card_flex' key={item.id}>
        <Item picture={item.PictureURL} 
        title={item.title} 
        description={item.description} 
        price={item.price} 
        un={item.un}/>
        </div>
  )
}))
}
