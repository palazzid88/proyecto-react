import React from 'react'
import './BodyApp.css'
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";

export default function BodyApp () {
    const onAdd = (cantidad) => {
      console.log(`compraste ${cantidad} unidades`);
    }

  return (
    <>
    <div>
        <h3>mensaje</h3>
    </div>
    </>
  )
}
