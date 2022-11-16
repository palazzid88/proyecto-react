import React from 'react'
import { useState, createContext } from 'react';

export const cartContext = createContext();

export default function CartContextComp({ Children }) {
    // almacenamos al carrito en un estado:
    const [cart, setCart] = useState([{id: 100, name: "papa"}]);




  return (
    <cartContext.Provider value={{cart, setCart}}>
        {Children}
    </cartContext.Provider>
  );
}
