import React from 'react'

export default function BodyApp () {

  return (
    <div>
        <card className="card_container">
            <picture className="card__picture">
                <img className="img" src="./img/naranja.jpg" alt=""></img>
            </picture>
        <div className="info_card">
            <h2 className="title__card">naranja de ombligo</h2>
            <p className="parraph__card">naranja para jugo</p>
            <p className="parraph__card">$350</p>
            <input type="number" id="cantidad${id}" className="cantidad_input"></input>
            <button id="btnAñadir${id}" className="button_card" type="button">añadir al carrito</button>
        </div>
        </card>
    </div>
  )
}
