import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import NavbarBootstrap from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="App">
      <NavbarBootstrap/>
      <ItemListContainer greeting='Esto es un mensaje para mostrar en pantalla' />
      <BodyApp/>
      <Footer/>
    </div>
  );
}


