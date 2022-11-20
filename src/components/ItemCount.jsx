import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { cartContext } from "../Context/CartContextComponent";

export default function ItemCount ({initial, stock, onAdd, prod}) {
    const [count, setCount] = useState(parseInt(initial));
    const {cart, addToCart} = useContext(cartContext);

    const decrease = () => {
      setCount(count - 1);
    }
    const increase = () => {
      setCount(count + 1);
    }

    // useEffect( () => {
    //   setCount(parseInt(initial));
    // }, [initial])

    function onAdd () {
      addToCart(prod, count);
      console.log("Itemcount", prod, count);
      // console.log(prod);
      // console.log("count", cart);
    }

  return (
    <>
      <InputGroup style={style.container}>
        <Button disabled={count <=1} variant="outline-secondary" onClick={decrease}> - </Button>
        <p type="number" className="cantidad_input" style={style.container}>{count}</p>
        <Button disabled={count >= stock} variant="outline-secondary" onClick={increase}> + </Button>
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
