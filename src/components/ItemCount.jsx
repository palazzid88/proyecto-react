import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { cartContext } from "../Context/CartContextComponent";

export default function ItemCount ({initial, stock, onAdd, prod}) {
    const [count, setCount] = useState(parseInt(initial));
    // const {cart, addItem} = useContext(cartContext);

    const clickRestar = () => {
      if (count >1) {
        setCount(count -1)        
      }
    };

    const clickSumar = () => {
      if (count < stock) {
        setCount(count + 1)
      }
    };
    
    

  return (
    <>
      <InputGroup style={style.container}>
        <Button disabled={count <=1} variant="outline-secondary" onClick={clickRestar}> - </Button>
        <p type="number" className="cantidad_input" style={style.container}>{count}</p>
        <Button disabled={count >= stock} variant="outline-secondary" onClick={clickSumar}> + </Button>
        <div>
          <Button disabled={stock <= 0} onClick={ () => onAdd(count)}> Añadir al Carrito </Button>
        </div>
        <div>
        </div>
      </InputGroup>
    </>
  );
}


const style = {
  container: {
    alignItems: 'baseline',
    justifyContent: 'center'
  } 
}
