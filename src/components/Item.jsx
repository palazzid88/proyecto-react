import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "./BodyApp.css";
import { ItemList } from "./ItemList";

export const Item = ( { productos }) => {
  return (
    <div key={productos.id} className="card_flex">
        {
            <div>
            <div className='card_container'>
                <picture className='card__picture'>
                    <img className='img' src={productos.img} />
                </picture>
            </div>
            <div className='info_card'>
                <h2 className='title__card'>{productos.title}</h2>
                <p className='parraph__card'>{productos.description}</p>
                <p className='parraph__card'>Precio: ${productos.price} por {productos.un}</p>
            </div>
    
    </div>
        }
    <Link to={"/item/" + productos.id}>
        <Button className="btn_acction" >Ver Más</Button>
    </Link>
    </div>
  );
}
