import React, { useContext, useState } from 'react'
import { db, getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp, doc,updateDoc, udddateDoc } from 'firebase/firestore'
// import Swal from 'sweetalert2'
import { Button } from 'bootstrap';
import { ItemCart } from './ItemCart';
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/CartContextComponent';
import { Checkout } from './Checkout';




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
      updateDoc(product, {stock: item.stock - item.cant})      
    });
  }
  return (

    <div>
        {cart.length === 0 ? (
            <>
            <h5 className=''>
                Carrito vacío <Link to="/">Comprar</Link>
            </h5>
            </>

        ) : (

            <>
            {cart.map((producto) => (
                < ItemCart key={producto.id} product = { producto } />
            ))}
            {/* <Checkout /> */}
            <Link to={"/checkout"}>
                <button className="btn-finalizar" onClick={finalizarCompra} variant="contained"> Finalizar Compra </button>
            </Link>
            </>
        )}
    </div>
    )
}
