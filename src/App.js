import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import NavbarBootstrap from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import { ComponentTitle } from './components/ComponentTitle';

export default function App() {

  const mensaje = "Esto es un mensaje para mostrar en pantalla"
  return (
    <div className="App">
      <NavbarBootstrap>
        <ComponentTitle />
      </NavbarBootstrap>
      <ItemListContainer greeting={mensaje} />
      <BodyApp/>
      <Footer/>
    </div>
  );
}


