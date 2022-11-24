import { collection, getDoc, getFirestore, where, doc } from 'firebase/firestore';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { productosStock } from "./data";
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {

  const [stock, setStock] = useState({});
  const [loading, setLoading] = useState(true);
  const { iditem } = useParams();


useEffect(()=> {
  const db = getFirestore();
  const productosPromesa = collection (db, 'productos')
    const refDoc = doc (productosPromesa, iditem)

    getDoc(refDoc)
    .then(res => {
      setStock({
        id: res.id,
        ...res.data()
      })
    })
    .catch((error) => {
      console.log("error");
    })
    .finally(()=> {
      setLoading(false)
    })
  }, [iditem]);

  return (
    <div>
      { loading ? <h1>Cargando</h1> : <ItemDetail stock={stock}/>}
    </div>
)
}
