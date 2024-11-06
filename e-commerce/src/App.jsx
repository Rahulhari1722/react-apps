import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Viewcart from "./component/Viewcart";
import Home from "./component/Home";

import { useState, createContext } from 'react';
import Viewproduct from "./component/Viewproduct";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
        <div className="container"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Viewcart />} />
            <Route path="/product" element={<Viewproduct/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;