import React, { useContext } from "react";
import './CartWidget.css';
import {Link} from 'react-router-dom'
import { cartContext } from "../Context/CartContextComponent";
import context from "react-bootstrap/esm/AccordionContext";

export default function Cartwidget () {
    const {qty} = useContext(cartContext);
    
    return (
        <div className="cart-qty">
            <Link to={"/cart"} as={Link}>
        <i className="bi bi-cart3"></i>
            </Link>
        <span className="">{qty}</span>
        </div>
        )
}