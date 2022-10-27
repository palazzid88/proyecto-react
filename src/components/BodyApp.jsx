import React from 'react'
import './BodyApp.css'
import Card from 'react-bootstrap/Card';
// import ItemCount from "./ItemCount";
import ItemCount from "./ItemCount";

export default function BodyApp () {
    const onAdd = (cantidad) => {
      console.log(`compraste ${cantidad} unidades`);
    }

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
              <ItemCount initial={1} stock= {5} onAdd={onAdd}/>
            </div>
        </div>
        </div>
    </div>
  )
}
