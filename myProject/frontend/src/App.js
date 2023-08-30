import React from "react";

// Import from react-router-dom
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import About from "./pages/About";
import Contact from "./pages/Contact"


import './App.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route  element={<Layout />}>
              <Route index  element={<Home />} />
              <Route path="product-list" element={<ProductList/>} />
              <Route path="about" element={<About/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="*" element={<Home />} />
              
            </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
    
  

  );
}

export default App;
