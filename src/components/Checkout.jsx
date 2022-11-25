import React, { useContext, useState } from 'react'
import { json } from 'react-router-dom';
import { cartContext } from "../Context/CartContextComponent";
import { addDoc, doc,updateDoc, collection, getFirestore } from "firebase/firestore";
import { increment } from 'firebase/firestore';


export const Checkout = () => {
    const { cart, total} = useContext(cartContext);
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
    <div>{cart.map((item) => (
      <p> {item.title + ' ' + item.price + ' ' + item.cantidad }</p>
    ))}{JSON.stringify(cart)}</div>
    <div>Total a pagar:{JSON.stringify(total)}</div>
    <div>
      <input placeholder='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input placeholder='celular' value={celular} onChange={(e) =>setCelular(e.target.value)}/>
      <input type="button" onClick={buyButton} value="comprar"/>
    </div>
    </>

  )
}
