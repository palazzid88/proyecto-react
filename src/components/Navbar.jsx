import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Cartwidget from './CartWidget';
import "./Navbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ComponentTitle } from './ComponentTitle';
// import { Button } from 'react-bootstrap';


const pages = [
  {label: 'Inicio', id:0, link: '/' },
  {label: 'Frutas', id:2, link: '/category/frutas' },
  {label: 'Verduras', id:3, link: '/category/verduras' },
  {label: 'Especias', id:4, link: '/category/especias' },
  {label: 'checkout', id:5, link: '/Checkout' }
]


export default function NavBar() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <ComponentTitle />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {pages.map((page)=> (
              <Nav.Link key={page.link} as={Link} to={page.link}>
                {page.label}
              </Nav.Link>
            ))}
          </Nav>
          <Cartwidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
