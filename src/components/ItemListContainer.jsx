import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from "./ItemList";
import naranja from "./img/naranja.jpg";


//creo un array de objetos simulando los productos
const productos = [
  {id:1, PictureURL: naranja, title: "naranja", description: "Naranja deombligo", precio: 250, unidad: "Kg"},
  {id:2, PictureURL: naranja, title: "banana", description: "Banana de Ecuador", precio: 300, unidad: "Kg"},
  {id:3, PictureURL: naranja, title: "manzana", description: "Manzana Roja", precio: 400, unidad: "Kg"},
  {id:4, PictureURL: naranja, title: "frutilla", description: "Frutilla roja", precio: 500, unidad: "Kg"},
];

// Creo una promesa de respuesta de servidor o API
// con un tiempo de respuesta de 2s
// como resolve devuelve array productos
const obtenerProductos = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(productos);
    console.log(`time out 2s`, productos);
  }, 
  2000);  
})


// creo componente ItemListContainer
export default function ItemListContainer ({greeting}) {
// creo un estadoinicial para el componente como un arrayvacío
  const [productos, setProductos] = useState([]);


  // Creo useEffect mira en la promesa y entrega productos como resolve 
  // por medio de data, SetProductosactualiza el array con los productos
    useEffect(()=> {
      obtenerProductos
      .then((data) => {
      setProductos(data)
      console.log(`useEffect`, data);
      })
      .catch((error)=> {
      console.log("algo salió mal");
      })
    }, []);


  return (
    productos.map((item) => {
      return(
        <>
        </>
      )
        }))}