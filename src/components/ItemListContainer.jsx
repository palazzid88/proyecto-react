import React from 'react'
import './ItemListContainer.css'

export default function ItemListContainer ({greeting}) {
    console.log(greeting);

  return (
    <div>
        <h1 className='greeting'> Hola {greeting} </h1>
    </div>
  )
}