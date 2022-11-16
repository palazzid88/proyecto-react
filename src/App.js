import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/Navbar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Footer from "./components/Footer";
import './App.css';
import Cart from "./components/Cart";
import { Checkout } from "./components/Checkout";
import CartContextComponent from "./Context/CartContextComponent";
export default function App() {

  return (
    <div className="App">
      {/* <CartContextComponent> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:idcategory' element={<ItemListContainer />}/>
          <Route path='/item/:iditem' element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/Checkout" element={<Checkout />}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
      {/* </CartContextComponent> */}
    </div>
  );
}


