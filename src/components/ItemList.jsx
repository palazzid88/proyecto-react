// import React, { useEffect, useState } from 'react'
// import Item from "./item";
// import naranja from "../components/img/naranja.jpg";
// import banana from "../components/img/banana.jpg";
// import manzana from "../components/img/manzana.jpg";
// // import manzanaVerde from "../components/img/manzanaVerde.jpg";
// import frutilla from "../components/img/frutilla.jpg";
// // import kiwi from "../components/img/kiwi.jpg";
// // import pera from "../components/img/pera.jpg";
// // import cereza from "../components/img/cereza.jpg";
// // import zanahoria from "../components/img/zanahoria.jpg";
// // import berenjena from "../components/img/berenjena.jpg";
// // import cebolla from "../components/img/cebolla.jpg";
// // import oregano from "../components/img/oregano.jpg";
// // import pimientab from "../components/img/pimientab.jpg";
// // import pimientoRojo from "../components/img/pimientoRojo.jpg";
// // import stock from "../stock.json";


// //creo un array de objetos simulando los productos
// const productos = [
//   {id:1, PictureURL: naranja, title: "naranja", description: "Naranja deombligo", price: 250, un: "Kg"},
//   {id:2, PictureURL: banana, title: "banana", description: "Banana de Ecuador", price: 300, un: "Kg"},
//   {id:3, PictureURL: manzana, title: "manzana", description: "Manzana Roja", price: 400, un: "Kg"},
//   {id:4, PictureURL: frutilla, title: "frutilla", description: "Frutilla roja", price: 500, un: "Kg"},
// ];

// // Creo una promesa de respuesta de servidor o API
// // con un tiempo de respuesta de 2s
// // como resolve devuelve array productos
// const obtenerProductos = new Promise((resolve, reject) => {
//   setTimeout(()=> {
//     resolve(productos);
//     console.log(`time out 2s`, productos);
//   }, 
//   2000);  
// })


// // creo componente ItemListContainer
// export default function ItemList () {
// // creo un estadoinicial para el componente como un arrayvacío
//   const [productos, setProductos] = useState([]);


//   // Creo useEffect mira en la promesa y entrega productos como resolve 
//   // por medio de data, SetProductosactualiza el array con los productos
//     useEffect(()=> {
//       obtenerProductos
//       .then((data) => {
//       setProductos(data)
//       console.log(`useEffect`, data);
//       })
//       .catch((error)=> {
//       console.log("algo salió mal");
//       })
//     }, []);


//   return (
//     productos.map(item => {
//       return<div className='card_flex' key={item.id}><Item picture={item.PictureURL} title={item.title} description={item.description} price={item.price} un={item.un}/></div>
//     })
//         )
// }