import React, { useContext } from 'react'
import { cartContext } from '../Context/CartContextComponent'
import { productosStock } from './data'
import ItemCount from './ItemCount';
import Table from 'react-bootstrap/Table';
import  "./ItemCart.css"
import { Button } from 'bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';


export const ItemCart = ({product, finalizarCompra}) => {
    console.log( 'ItemCart', product);
    console.log('total', product.cantidad * product.price);
    const {removeItem} = useContext(cartContext)

  return (
    <>

    <div>
    
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Precio</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td><img>{product.img}</img></td> */}
              <td>${product.price}</td>
              <td>{product.title}</td>
              <td>{product.cantidad}</td>
              <td>${product.price * product.cantidad}</td>
              <CloseButton onClick={()=> removeItem(product.id)} aria-label="Hide" />
              {/* <button onClick={() => removeItem(product.id)}>Eliminar</button> */}
            </tr>
          </tbody>
        </Table>
        </div>
        </>
      );
    }
    
