// import React, { useContext, useState } from 'react'
// import CartContext from '../Context/CartContextComponent';
// import { db } from 'firebase/firestore'
// import { collection, addDoc, serverTimestamp, doc,updateDoc, udddateDoc } from 'firebase/firestore'
// import Swal from 'sweetalert2'
// import { Button } from 'bootstrap';



// export default function Cart() {
//   const {cart, total, clear, qty} = useContext(CartContext) 

//   const [pedido, setPedido] = useState("");
//   const comprador = {
//     nombre: '',
//     apellido: '',
//     email: ''
//   }

//   const finalizarCompra =()=> {
//     const ventasCollection = collection (db, "ventas");
//     addDoc (ventasCollection, {
//       comprador,
//       items: cart,
//       total,
//       date: serverTimestamp()
//     })
//     .then(result => {
//       console.log(result.id);
//       setPedido(result.id)

//       Swal.fire({
//         title: 'muchas gracias por su compra!',
//         html: 'numero de compra: <b>${result.id}</b>',
//         showClass: {
//           popup: 'animate__animated animate__fadeInDown'
//         },
//         hideClass: {
//           popup: 'animate__animated animate__fadeOutUp'
//         },
//       });
//     });

//   actualizarStock();

//   clear();


//   };

//   const actualizarStock =()=> {
//     cart.forEach(item => {
//       const product = doc(db, "productos", item.id);
//       updateDoc(product, {stock: item.stock - item.cant})      
//     });
//   }
//   return (
//     <div>Esto es el carrito de compras</div>
//   )
// }
