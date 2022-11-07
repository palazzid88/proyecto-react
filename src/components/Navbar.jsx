import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, NavDropdown, Button, Form, FormControl, Container } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import Cartwidget from './CartWidget';
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ComponentTitle } from './ComponentTitle';




export default function NavbarBootstrap ({children}) {

  const categorias =[
    {nombre: "Inicio", id:0, ruta: "/"},
    {nombre: "Frutas", id:1, ruta: "/category/frutas"},
    {nombre: "Verduras", id:2, ruta: "/category/verduras"},
    {nombre: "Especias", id:3, ruta: "/category/especias"},
  ]



  return (
    <header>
      <h1 className='header-title'><ComponentTitle /></h1>
      <nav className='header-nav'>
        {
          categorias.map((categoria) => {
            return(
              <>
              <Container>
                {/* <Nav.Link href={categoria.ruta}>{categoria.nombre}</Nav.Link> */}
              <Link key={categoria.id} to={categoria.ruta}> {categoria.nombre}</Link>
              </Container>
              </>
            )
          })
        }
      </nav>
      <Cartwidget />
    </header>
  )}