import React from 'react'
import { Link } from 'react-router-dom'
// import { ItemCount } from "./ItemCount";
import "./BodyApp.css";

export const Item = ( { item }) => {
  return (
    <div key={item.id} className="card_flex">
        {
            <div className='card_flex'>
            <div className='card_container'>
                <picture className='card__picture'>
                    <img className='img' src={item.PictureURL}></img>
                </picture>
            </div>
            <div className='info_card'>
                <h2 className='title__card'>{item.title}</h2>
                <p className='parraph__card'>{item.description}</p>
                <p className='parraph__card'>{item.price}</p>
                <p className='parraph__card'>{item.un}</p>
                <div className='info_cantidad'>
                    {/* <ItemCount initial={1} stock={5} onAdd={onAdd}/> */}
                </div>
            </div>
    
    </div>
        }
    <Link to={"/item/" + item.id}>
        Ir al Item
    </Link>
    </div>
  );
}
