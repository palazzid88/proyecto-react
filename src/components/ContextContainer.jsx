import React, { useState } from 'react'
import { createContext } from 'react'

export const allContext = createContext(); 

export const ContextContainer = ({children}) => {
  const [darkMode, setDarkMode] = useState(false)
  const [carrito, setCarrito] = useState([]);
  function addItem({item, quantity}) {};
  function removeItem(itemId) {};
  function clear() {};
  function isInCart(id) {};
    
  
  return (
    <allContext.Provider value={{
      darkMode, 
      setDarkMode, 
      carrito, 
      setCarrito, 
      addItem, 
      removeItem,
      clear, 
      isInCart}}>
      {children}
    </allContext.Provider>
  )
}
