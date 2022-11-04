import logo from './logo.svg';
import './App.css';
import NavbarBootstrap from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import { ComponentTitle } from './components/ComponentTitle';
import ItemList from './components/ItemList';
import Test from './components/Test';
import { ItemDetail } from './components/ItemDetail';
import { browserRouter, Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {

  const mensaje = "Esto es un mensaje para mostrar en pantalla"
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarBootstrap>
        <ComponentTitle />
      </NavbarBootstrap>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={mensaje} />}/>
          <Route path='/ItemList' element={<ItemList/>}/>
          <Route path='/ItemDetail' element={<ItemDetail />}/>
          <Route path='/Bodyapp' element={<BodyApp/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}


