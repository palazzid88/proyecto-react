import React from 'react'
import ItemCount from './ItemCount'

export const ItemDetail = ({ stock }) => {
  function addItem(x) {
    console.log("puede añadir " + x + " de este producto: " + stock.title);
    
  }
  return(
    <div className='card_flex'>
      <img>{stock.PictureURL}</img> 
      <p>{stock.title}</p> 
      <p>{stock.description}</p> 
      <p>{stock.price}</p> 
      <p>{stock.un}</p>
        <ItemCount initial={1} stock={5} addItem={addItem}/>
    </div>
  )}


