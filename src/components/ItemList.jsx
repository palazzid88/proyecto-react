import React from 'react'
import ItemCount from './ItemCount'
// import ItemListContainer from './ItemListContainer'
import './BodyApp.css'

export const ItemList = ({picture, title, description, price, un}) => {
    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} de unidades de ${title}`);
    }
  return (
    <div>
        <div className='card_container'>
            <picture className='card__picture'>
                <img className='img' src={picture}></img>
            </picture>
        </div>
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
  )
}
