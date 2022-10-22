import React from 'react'

export default function ItemListContainer ({greeting}) {
    console.log(greeting);

  return (
    <div>
        <h1> Hola {greeting} </h1>
    </div>
  )
}
