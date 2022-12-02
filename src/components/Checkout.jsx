import React, { useContext, useState } from 'react'
import { json } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { cartContext } from "../Context/CartContextComponent";
import { addDoc, doc,updateDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { increment } from 'firebase/firestore';
import "./Checkout.css";


export const Checkout = () => {
    const { cart, total, price} = useContext(cartContext);

    // Formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');


    console.log('cartlog', cart);
    console.log('totallog', total);
    
    function buyButton() {
      console.log(nombre  + ' ' + celular + ' ' + email + ' ' + "quiere comprar " + JSON.stringify(cart), total)
      const pedido = {
        comprador: { nombre, celular, email },
        carrito: cart,
        total: total,
        date: serverTimestamp()
      };
      
      console.log("quiere comprar", pedido);

      const db = getFirestore();

      const pedidos = collection(db, 'pedidos' );
      addDoc(pedidos, pedido).then((pedidoInsertado) => {
        console.log(pedidoInsertado.id);
        
        cart.forEach(item => {
          const documento = doc(db, 'productos', item.id);
          updateDoc(documento, { stock: increment(-item.cantidad) });
        });
        });
      }

  return (
    <>
  <section className='buy-checkout'>
    <div className='cart-check'>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Precio</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
      {cart.map((product)=> (
        <tbody>
          <tr>
            <td>${product.price}</td>
            <td>{product.title}</td>
            <td>{product.cantidad}</td>
            <td>${product.price * product.cantidad}</td>
          </tr>
        </tbody>
      ))}
      </Table>
          Total a pagar: ${total}
      </div>

        <div>
        </div>
        <div className="form-check">
          <div className='div-form'>
            <p>nombre:</p>
            <input placeholder='Juan' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          </div>
          <div className='div-form'>
            <p>email:</p>
            <input placeholder='juan123@mail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='div-form'>
            <p>celular</p>
            <input placeholder='celular sin 0 ni 15' value={celular} onChange={(e) =>setCelular(e.target.value)}/>
          </div>
          <div>
            <br></br>
            <input type="button" onClick={buyButton} value="comprar"/>
          </div>
        </div>
  </section>

      
    
    </>

  )
}
