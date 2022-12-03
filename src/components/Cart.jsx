import React, { useContext, useState } from 'react'
import { db, getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp, doc,updateDoc, udddateDoc } from 'firebase/firestore'
// import Swal from 'sweetalert2'
import { Button } from 'bootstrap';
import { ItemCart } from './ItemCart';
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/CartContextComponent';
import { Checkout } from './Checkout';
import huerta from "../components/img/huerta.jpg"
import  "./ItemCart.css"





export default function Cart() {
    const db = getFirestore();
    const {cart, total, clear, qty} = useContext(cartContext);


  const [pedido, setPedido] = useState("");
  const comprador = {
    nombre: '',
    apellido: '',
    email: ''
  }

  const finalizarCompra =()=> {
    const ventasCollection = collection (db, "pedido");
    addDoc (ventasCollection, {
      comprador,
      items: cart,
      total,
      date: serverTimestamp()
    })
    .then(result => {
      console.log(result.id);
      setPedido(result.id)

    //   Swal.fire({
    //     title: 'muchas gracias por su compra!',
    //     html: 'numero de compra: <b>${result.id}</b>',
    //     showClass: {
    //       popup: 'animate__animated animate__fadeInDown'
    //     },
    //     hideClass: {
    //       popup: 'animate__animated animate__fadeOutUp'
    //     },
    //   });
    });

  actualizarStock();

  clear();


  };

  const actualizarStock =()=> {
    cart.forEach(item => {
      const product = doc(db, "productos", item.id);
      updateDoc(product, {stock: item.stock - item.qty})      
    });
  }
  return (

    <div>
        {cart.length === 0 ? (
            <>
            <section>
              <h5 className=''>
                Aún no has agregado ningún producto al carrrito, ingresa al siguiente link para comprar 
              </h5>
              <Link to="/">Comprar</Link>
            </section>
            </>

        ) : (

            <>
            {cart.map((producto) => (
                < ItemCart key={producto.id} product = { producto } />
            ))}
              {/* <div>
                Total a pagar: ${parseInt(total)}
              </div> */}

            <div className='div-checkout'>
              <Link to={"/checkout"}>
                  <button className="btn-finalizar" /*onClick={finalizarCompra}*/ variant="contained"> Finalizar Compra </button>
              </Link>
              <button onClick={()=> clear()} aria-label="Hide">Vaciar Carrito</button>
            </div>
            </>
        )}
    </div>
    )
}
