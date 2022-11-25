import React, { useContext } from 'react'
import { cartContext } from '../Context/CartContextComponent'
import { productosStock } from './data'
import ItemCount from './ItemCount';
import  "./ItemCart.css"

export const ItemCart = ({product, finalizarCompra}) => {
    console.log( 'ItemCart', product);
    console.log('total', product.cantidad * product.price);
    const {removeItem} = useContext(cartContext)

  return (

    <div>
        <section className='section-cart'>
            {/* <img src={product.img} alt="" /> */}
            <h3 className='cart-title'>{product.title}</h3>
            <div className='div-cart'>
                <p className='p-cart'>Precio por unidad: ${product.price}</p>
                <p className='p-cart'>Cantidad: {product.cantidad}</p>
                <p className='p-cart'> Subtotal: ${product.cantidad * product.price}</p>
                <button onClick={() => removeItem(product.id)}> Eliminar</button>
            </div>
        </section>
    </div>

    )
}
