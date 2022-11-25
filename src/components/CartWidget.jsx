import React, { useContext } from "react";
import './CartWidget.css';
import {Link} from 'react-router-dom'
import { cartContext } from "../Context/CartContextComponent";
import context from "react-bootstrap/esm/AccordionContext";

export default function Cartwidget () {
    const {qty} = useContext (context)
    
    return (
        // <div>
        <img src="./img/carrito.png" className="img_carrito" ></img>
        // </div>
        )
}