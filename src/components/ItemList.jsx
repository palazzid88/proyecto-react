import React from 'react'
import { Item } from "./Item";
import './BodyApp.css'

export const ItemList = ({ productos }) => {
    console.log(`ItemList`, productos);
  return (
    <div>
        {productos.map((productos) => (
            <Item  key={productos.id} productos={productos} />
        ))}
    </div>
  )
}
