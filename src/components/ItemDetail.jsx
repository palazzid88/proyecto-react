import React from 'react'
import ItemCount from './ItemCount'
import "./BodyApp.css"

export const ItemDetail = ({ stock }) => {
  function addItem(cant) {
    console.log("puede añadir " + cant + " de este producto: " + stock.title);
    
  }
  return(
    <div className='card_flex'>
    {stock.id ? (
      <>
      <div className='card_container'>
        <img className='card_flex' src={stock.PictureURL}></img> 
        <h3 className='title__card'>{stock.title}</h3> 
        <p className='parraph__card'>{stock.description}</p> 
        <p className='parraph__card'>${stock.price} por {stock.un}</p> 
          <ItemCount initial={1} stock={5} addItem={addItem}/>
      </div>
      </>
    ) :(
      <> Loading ...</>
    )}
    </div>
  );
}


