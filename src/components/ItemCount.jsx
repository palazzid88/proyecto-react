import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




export default function ItemCount ({initial, stock, onAdd}) {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
      setCount(count - 1);
    }
    const increase = () => {
      setCount(count + 1);
    }

    useEffect( () => {
      setCount(parseInt(initial));
    }, [initial])

  return (
    <>
      <InputGroup>
        <Button disabled={count <=1} variant="outline-secondary" onClick={decrease}> - </Button>
        <p type="number" className="cantidad_input" style={style.container}>{count}</p>
        <Button disabled={count >= stock} variant="outline-secondary" onClick={increase}> + </Button>
        <div>
          <Button disabled={stock <= 0} onClick={ () => onAdd(count)}> Añadir al Carrito </Button>
        </div>
        <div>
          <Button>Ver Mas</Button>
        </div>
      </InputGroup>
    </>
  );
}


const style = {
  container: {
    margin: 'auto',
    width: '100',
    displayInline: 'block'
  } 
}
