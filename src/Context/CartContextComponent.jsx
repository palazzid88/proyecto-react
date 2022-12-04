import { getFirestore } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState, createContext } from 'react';

export const cartContext = createContext();

export default function CartContext({ children }) {

    // almacenamos al carrito/cantidad/total en un estado:
    const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || []);
    const [qty, setQty] = useState([0]);
    const [total, setTotal] = useState([0])

    useEffect(() => {
      const db = getFirestore();
      setQty (cart.reduce((total, item) => total + item.cantidad, 0));
      setTotal (cart.reduce((total, item) => total + (item.cantidad * item.precio), 0))
    }, [])


      const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
          const actualizado = cart.map((producto) =>{
            if (producto.id === item.id) {
              producto.cantidad += cantidad;              
            }
            return producto
          });
          setCart(actualizado);
        } else {
          setCart ([...cart, { ...item, cantidad }]);
        }
        setQty (qty + cantidad);
        setTotal(total + (item.price * cantidad));
      };


      const deleteItem = (id) =>  {
        const found = cart.find((producto => producto.id === id ));
        setCart(cart.filter ((item) => item.id !== id))
        setQty (qty - found.cantidad)
        setTotal (total - (found.precio * found.cantidad))
      };
      

      const removeItem = (itemid) => {
        setCart(cart.filter((item) => item.id !== itemid));
      }
      

      const isInCart = (id) => cart.some((item) => item.id === id);

      const clear = () => {
        setCart([]);
        console.log(setCart);
        setQty(0);
        setTotal(0);
      };
    
  
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
      }, [cart]);
      

  return (
    <cartContext.Provider value={{cart, qty, total, addItem, deleteItem, clear, removeItem}}>
        {children}
    </cartContext.Provider>
  );
}
