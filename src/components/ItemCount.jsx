import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// const useCounter = () => {
//     const [counter, setCounter] = useState(0);
//     console.log('cuenta inicial', counter)

//     const increase = () => setCounter(counter + 1);
//     console.log('cuenta suma', counter)

//     const decrease = () => setCounter(counter - 1);
//     console.log('cuenta resta', counter)

// return {
//     counter,
//     increase,
//     decrease,
// }
// }

export default function ItemCount () {
      const [counter, setCounter] = useState(0);

    // const {counter, increase, decrease} = useCounter
    console.log('dentro de la fx', counter)
  return (
    <>
      <InputGroup>
        <Button variant="outline-secondary" onClick={ () => setCounter(counter -1)}> - </Button>
        <p type="number" className="cantidad_input">{counter}</p>
        <Button variant="outline-secondary" onClick={ () => setCounter(counter + 1)}> + </Button>
      </InputGroup>
    </>
  );
}


const style = {
  container: {
    width: '100',
    color: 'red'
  } 
}
