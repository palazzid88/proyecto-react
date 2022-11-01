// import React, { useEffect, useState } from 'react'
// import Item from './item';
// import stock from "../../src/stock.json";

// const obtenerProductos = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       resolve(productos);
//       console.log(`time out 2s`, productos);
//     },
//     2000);
//   })

// const Test = () => {
//     console.log(`antes del useState`, stock);

//     const [productos, setProductos] = useState ([])

//     useEffect(()=> {
//         console.log(`dentro del useEffect`, stock);
//         fetch({stock})
//         .then(res=> res.json())
//         .then(data => {
//             setProductos(data)
//             console.log(`post setProductos`, stock);
//             console.log(`json`, data);
//         })
//     }, [])

//     const obtenerProductos = new Promise((resolve, reject) => {
//         setTimeout(()=> {
//           resolve(productos);
//           console.log(`time out 2s`, productos);
//         },
//         2000);
//       })

//   return (
//     productos.map(item => {
//         return<div className='card_flex' key={item.id}><Item picture={item.PictureURL} title={item.title} description={item.description} price={item.price} un={item.un}/></div>
//       })
//     )
// }

// export default Test
