import React, { useContext } from 'react'
import { cartContext } from '../Context/CartContextComponent'
import { productosStock } from './data'
import ItemCount from './ItemCount';
import Table from 'react-bootstrap/Table';
import  "./ItemCart.css"
import { Button } from 'bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import { clear } from '@testing-library/user-event/dist/clear';
import { Checkout } from './Checkout';


export const ItemCart = ({ product, finalizarCompra }) => {
    console.log( 'ItemCart', product);
    console.log('total0', product.cantidad * product.price);
    const { deleteItem, cart } = useContext(cartContext);

  return (
  <>
  <div className='cart-div'>
    <div className='div-cart'>    
            <div>
              <img className='img-cart' src={product.img} />
            </div>
            <div className='div-prod'>
              <div>
                <h3>{product.title}</h3>
              </div>
              <div className='div-item'>
                <p className='p-item'>cant: {product.cantidad}</p>
                <p className='p-item'>precio: ${product.price}</p>
                <p className='p-item-total'>subtotal: ${product.price * product.cantidad}</p>
                <CloseButton onClick={()=> deleteItem(product.id)} aria-label="Hide" />
              </div>
            </div>
    </div>
  </div>

        </>
        
      );
    }
    
