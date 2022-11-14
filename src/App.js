import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/Navbar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Footer from "./components/Footer";
import './App.css';
import { CartProvider } from "./Context/CartContext";
import { ContextContainer } from "./components/ContextContainer";

export default function App() {

  return (
    <div className="App">
      {/* <CartProvider> */}
      <BrowserRouter>
      <ContextContainer>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:idcategory' element={<ItemListContainer />}/>
          <Route path='/item/:iditem' element={<ItemDetailContainer />}/>
        </Routes>
      <Footer/>
      </ContextContainer>
      </BrowserRouter>
      {/* </CartProvider> */}
    </div>
  );
}


