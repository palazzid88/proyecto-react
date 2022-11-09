import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productosStock } from "./data";
import { ItemList } from './ItemList';

export default function ItemListContainer({greeting}) {
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(()=> {
    const productosPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productosStock);
        console.log(productosStock);
      }, 2000);
  });

  productosPromise.then((res) => {
    if(idcategory) {
      setProductos(res.filter((item) => item.category == idcategory));
      console.log(`nuevo`, productos);
    } else {
      setProductos(res);
    }
  });
}, [idcategory]);

return(
  <div>
    <ItemList productos={productos} />
  </div>
);
}