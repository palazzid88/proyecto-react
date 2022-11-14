import React, { Children } from 'react'
import { useState, useContext } from 'react';
export const useCartContext = () => useCartContext ('');

export const CartProvider = ({ Children }) => {
    // almacenamos al carrito en un estado:
    const [cart, setCart] = useState([]);

    // esta fx se usará en itemdetail (donde vamos agregar carrito)
    const addProduct = (item, quantity) => {
        if(isInCart(item.id)) {
            setCart(
                cart.map((product) =>{
                return product.id === item.id ? 
                {...product, quantity: product.quantity + quantity} : product;
        })
        );
        } else {
            setCart([...cart, {...item, quantity}]);
        }
    } 

    // para vaciar el carrito creamos la fx clearCart, 
    // cada vez que apretemos en clear cart va a borrar en contenido
    // setCArt = array vacío
    const clearCart = () => setCart([]);

    //para saber si el producto esta en el carrito (find)
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; /* si encuentra coincidencia envía T o F */

    // para remover del carrito, pasamos el id del pro a eliminar, y 
    //  el mismo carrito, 
    // y dejamos pasar todos los prod que no tengan ese id, forma un nuevo array.
    // const removeProduct = (id) => setCart(cart.filter(product.id !== id));





  return (
    <useCartContext.Provider value={{
        clearCart,
        isInCart,
        // removeProduct,
        addProduct
    }}>
        {Children}
    </useCartContext.Provider>
  )
}
