import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import "./BodyApp.css"
import { cartContext } from '../Context/CartContextComponent'

export const ItemDetail = ({ stock }) => {
  const [pressButton, setPressButton] = useState (false);
  const {addItem} = useContext (cartContext)

  const onAdd = (cantidad) => {
    addItem(stock, cantidad);
    setPressButton(true);
    console.log('itemDetail', stock, cantidad);
  }
  
  return(
    <div className='card_flex'>
    {stock.id ? (
      <>
      <div className='card_container'>
        {/* <img className='card_flex' src={stock.PictureURL}></img>  */}
        <h3 className='title__card'>{stock.title}</h3> 
        <p className='parraph__card'>{stock.description}</p> 
        <p className='parraph__card'>${stock.price} por {stock.un}</p> 
          <ItemCount initial={1} stock={5} onAdd={onAdd} prod={stock.title}/>
      </div>
      </>
     ) :( 
       <> Loading ...</>
      )}
    </div>
  );
}


