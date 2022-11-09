import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
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
                <p className='parraph__card'>Precio: ${item.price} por {item.un}</p>
            </div>
    
    </div>
        }
    <Link to={"/item/" + item.id}>
        <Button className="btn_acction" >Ver Más</Button>
    </Link>
    </div>
  );
}
