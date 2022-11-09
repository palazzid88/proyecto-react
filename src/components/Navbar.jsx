import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import Cartwidget from './CartWidget';
import "./Navbar.css"
// import { ComponentTitle } from './ComponentTitle';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const pages = [
  {label: 'Inicio', id:0, link: '/' },
  {label: 'productos', id:1, link: '/'},
  {label: 'Frutas', id:2, link: '/category/frutas' },
  {label: 'Verduras', id:3, link: '/category/verduras' },
  {label: 'Especias', id:4, link: '/category/especias' },
]


export default function NavBar() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          Logo
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


























// export default function NavbarBootstrap ({children}) {





//   return (

//     <header>
// <Navbar bg="dark" variant="dark">
// <Container>
//   <Nav className="me-auto">
//     {
//       categorias.map((page)=> {
//         return <Nav.Link key={page.id} href={page.link}>{page.nombre}</Nav.Link>

//       })
//     }
//   </Nav>
// </Container>
// </Navbar>
// </header>
//   )}









    // <header>
    //   <h1 className='header-title'><ComponentTitle /></h1>
    //   <nav className='header-nav'>
    //     {
    //       categorias.map((page) => {
    //         return(
    //           <Container key={page.id}>
    //             {/* <Nav.Link href={categoria.ruta}>{categoria.nombre}</Nav.Link> */}
    //           <Link to={page.link}>{page.label}</Link>
    //           </Container>
    //         )
    //       })
    //     }
    //   </nav>
    //   <Cartwidget />
    // </header>
  