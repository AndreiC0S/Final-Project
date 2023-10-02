import React from 'react'

import { Outlet } from "react-router-dom";
import { CartContextProvider } from "../../context/cartContext";

// import Banner from "../banner/Banner";
import NavBar from './NavBar';
import Footer from "./Footer"
import ShoppingCart from '../ShoppingCart/ShoppingCart';

export default function Layout() {
  return (
    <>
    {/* <Banner/> */}
    
    <NavBar/>
    
      <div className='fixed right-[3vw] top-[8vh] z-40'>
        <CartContextProvider>
          <ShoppingCart/>
        </CartContextProvider>
      </div>

    <Outlet/>
    
    <Footer/>
    
    
    </>
   
    

    
  )
}
