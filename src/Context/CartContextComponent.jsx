import React, { useEffect } from 'react'
import { useState, createContext } from 'react';

export const cartContext = createContext();

export default function CartContext({ children }) {

    // almacenamos al carrito en un estado:
    const [cart, setCart] = useState([]);
    const [cant, setCant] = useState([0]);
    const [total, setTotal] = useState([0])

    useEffect(() => {
      setCant (cart.reduce((total, prod) => total + prod.count, 0));
      setTotal (cart.reduce((total, prod) => total + (prod.cantidad * prod.precio), 0))
    }, [])


      const addToCart = (prod, count) => {
        if (isInCart(prod.id)) {
          const actualizado = cart.map((item) =>{
            if (item.id === prod.id) {
              item.count += count;              
            }
            return item
          });
          setCart(actualizado);          
        } else {
          setCart ([...cart, {...prod, count}]);
        }
        setCant (cant + count);
        setTotal(total + (prod.precio * count));
      }


      const deleteProd = (id) =>  {
        const found = cart.find((producto => producto.id === id ));
        setCart(cart.filter ((prod) => prod.id !== id))
        setCant (cant - found.count)
        setTotal (total - (found.precio * found.count))
      }
      

      const removeProd = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
      }
      

      const isInCart = (id) => cart.some((prod) => prod.id == id);
    
  

  return (
    <cartContext.Provider value={{cart, addToCart}}>
        {children}
    </cartContext.Provider>
  );
}
