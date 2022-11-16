import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import { cartContext } from "../Context/CartContextComponent";

export default function ItemCount ({initial, stock, addItem, prod}) {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
      setCount(count - 1);
    }
    const increase = () => {
      setCount(count + 1);
    }

    // useEffect( () => {
    //   setCount(parseInt(initial));
    // }, [initial])

    function addItem () {
      console.log('cantidad', count);
      console.log(prod);
      // console.log(cart);
      console.log('Hola');
    }

  return (
    <>
      <InputGroup style={style.container}>
        <Button disabled={count <=1} variant="outline-secondary" onClick={decrease}> - </Button>
        <p type="number" className="cantidad_input" style={style.container}>{count}</p>
        <Button disabled={count >= stock} variant="outline-secondary" onClick={increase}> + </Button>
        <div>
          <Button disabled={stock <= 0} onClick={ () => addItem(count)/*onAdd(count)*/}> Añadir al Carrito </Button>
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
