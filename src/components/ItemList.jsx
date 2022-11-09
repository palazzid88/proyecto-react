import React from 'react'
import { Item } from "./Item";
import './BodyApp.css'

export const ItemList = ({ productos }) => {
    console.log(`ItemList`, productos);
  return (
    <div>
        {productos.map((item) => (
            <Item  key={item.id} item={item} />
        ))}
    </div>
  )
}
