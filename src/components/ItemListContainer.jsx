import { format } from 'prettier';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productosStock } from "./data";
import { ItemList } from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

export default function ItemListContainer({greeting}) {
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);

    
    useEffect(() => {
      const db = getFirestore();
      let productos;
      if (idcategory) {
        productos = query(collection(db, 'productos'), where('category', '==', idcategory));
      } else {
        productos = collection(db, 'productos');
      }


    getDocs(productos).then(res => {
      console.log(res.docs);
      const newArray = res.docs.map((producto) => {
        return { 
          id: producto.id, title: producto.data().title, category: producto.data().category, description: producto.data().description, img: producto.data().img, price: producto.data().price, un: producto.data().un }
    });
      console.log(`nuevo`, newArray);
      setProductos(newArray);
  });
}, [idcategory]);

return(
  <div>
    <ItemList productos={productos} />
  </div>
);
}