import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/Navbar';
import { ComponentTitle } from './components/ComponentTitle';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Footer from "./components/Footer";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:idcategory' element={<ItemListContainer />}/>
          <Route path='/item/:iditem' element={<ItemDetailContainer />}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}


