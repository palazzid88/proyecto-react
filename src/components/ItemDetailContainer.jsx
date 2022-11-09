import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { productosStock } from "./data";
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
  const { iditem } = useParams();

  const [stock, setStock] = useState({});


useEffect(()=> {
  const productosPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productosStock.find((item)=> item.id == iditem));
    }, 2000);
  });


  productosPromesa
  .then(res=> {
    setStock(res);
    console.log(`setStock`, res);
  });
},[iditem]);

  return (
    <div>
      <ItemDetail stock={stock}/>
    </div>
)
}
