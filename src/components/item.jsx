import React from 'react'
import ItemCount from './ItemCount'
import './BodyApp.css'
import stock from "../stock.json";

// Toma las props desde ItemList//
const Item = ({picture, title, description, price, un}) => {
    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} unidades de  ${title}`);
      }
  return (
    <>
    <div>
        <div className='card_container'>
            <picture className='card__picture'>
                <img className='img' src={picture}></img>
            </picture>

        <div className='info_card'>
            <h2 className='title__card'>{title}</h2>
            <p className='parraph__card'>{description}</p>
            <p className='parraph__card'>{price}</p>
            <p className='parraph__card'>{un}</p>
            <div className='info_cantidad'>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Item