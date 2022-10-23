import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, Container } from "react-bootstrap";
import Cartwidget from './CartWidget';

export default function NavbarBootstrap () {
    return (
        <>
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar/>
        <Navbar.Brand href="#home">
            <Cartwidget/>
            Desde la Huerta a tu casa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Tienda" id="basic-nav-dropdown">
              <NavDropdown.Item href="http://www.google.com.ar">
                Frutas
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/">
                Verduras
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.mercadolibre.com.ar/">
                Especias
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
              <NavDropdown.Item href="https://www.google.com/maps/">
                Todos los productos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        </>
    )
}



