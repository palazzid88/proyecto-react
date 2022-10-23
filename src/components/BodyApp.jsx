import React from 'react'
import './BodyApp.css'
import Card from 'react-bootstrap/Card';

export default function BodyApp () {

  return (
    <div>
        <div className="card_container">
            <picture className="card__picture">
                <img className="img" src="./img/naranja.jpg" alt=""></img>
            </picture>
        <div className="info_card">
            <h2 className="title__card">naranja de ombligo</h2>
            <p className="parraph__card">naranja para jugo</p>
            <p className="parraph__card">$350</p>
            <div className='info_cantidad'>
              <input type="number" id="cantidad${id}" className="cantidad_input" placeholder='1'></input>
              <p>Kg</p>
              <button id="btnAñadir${id}" className="button_card" type="button">añadir al carrito</button>
            </div>
        </div>
        </div>
    </div>
  )
}
