import React, { useEffect, useState } from 'react'
import naranja from "../components/img/naranja.jpg";
import banana from "../components/img/banana.jpg";
import manzana from "../components/img/manzana.jpg";
import frutilla from "../components/img/frutilla.jpg";
import { ItemList } from './ItemList';
// import manzanaVerde from "../components/img/manzanaVerde.jpg";
// import kiwi from "../components/img/kiwi.jpg";
// import pera from "../components/img/pera.jpg";
// import cereza from "../components/img/cereza.jpg";
// import zanahoria from "../components/img/zanahoria.jpg";
// import berenjena from "../components/img/berenjena.jpg";
// import cebolla from "../components/img/cebolla.jpg";
// import oregano from "../components/img/oregano.jpg";
// import pimientab from "../components/img/pimientab.jpg";
// import pimientoRojo from "../components/img/pimientoRojo.jpg";
// import stock from "../stock.json";


//creo un array de objetos simulando los productos
const productos = [
  {id:1, PictureURL: naranja, title: "naranja", description: "Naranja deombligo", price: 250, un: "Kg"},
  {id:2, PictureURL: banana, title: "banana", description: "Banana de Ecuador", price: 300, un: "Kg"},
  {id:3, PictureURL: manzana, title: "manzana", description: "Manzana Roja", price: 400, un: "Kg"},
  {id:4, PictureURL: frutilla, title: "frutilla", description: "Frutilla roja", price: 500, un: "Kg"},
];


const obtenerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
    console.log(productos);
  }, 2000);
})


export default function ItemListContainer ({greeting}) {
    console.log(greeting);

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      obtenerProductos
      .then((data) => {
        setProductos(data)
        console.log(`useEffect`, data);
      })
      .catch((error) => {
        console.log(`algo salió mal`);
      })
    }, []);
    



  return (
    productos.map(item => {
      return <div className='card_flex' key={item.id}><ItemList picture={item.PictureURL} title={item.title} description={item.description} price={item.price} un={item.un}/></div>
    })
  )
}