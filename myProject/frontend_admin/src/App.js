import React,{useContext} from "react";

import {BrowserRouter, Routes,Route} from "react-router-dom";

import Home from "./Pages/Home";
import Layout from "./Components/Layout/Layout";
import './App.css';
import Products from "./Pages/Products";
import Users from "./Pages/Users";
import Admins from "./Pages/Admins";

import { AuthContext } from "./context/authContext";

function App() {

  const {authenticated} = useContext(AuthContext)
  return (
        
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route  element={<Layout />}>
            {authenticated &&(
              <>
            <Route path="products" element={<Products />} />
            <Route path="users" element={<Users />} />
            <Route path="admins" element={<Admins />} />
              </>
          )}

            <Route path="*" element={<Home />} />
              
            </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
    
  

  );
}

export default App;
