import React, { useState,useContext,useEffect } from "react";
import "./shoppingCart2.css";
import { CartContextProvider } from "../../context/cartContext";
import CartContent from "./CartContent";
import { CartContext } from "../../context/cartContext";

export default function ShoppingCart() {
  const { content, setContent } = useContext(CartContext);

  const [cart, setCart] = useState(true);

  // const [testLenght, setTestLenght] = useState(JSON.parse(localStorage.getItem("cartItems")).length)
  const [cartLenght, setCartLenght] = useState(0)

  // console.log(testLenght)

  const handleToggleCart = () => {
    setCart((current) => !current);
    // console.log(cart);
  };

useEffect(()=>{

  setCartLenght(Object.keys(content).length)
  
},[content])

  return (
    <>
      <button className="toggle-cart " onClick={handleToggleCart}>
        <i class="fas fa-shopping-cart text-black "></i>
      </button>
      <span class="cart-item-count m-0 p-0">{cartLenght}</span>
      {!cart && (
        <>
        <CartContextProvider>
          <CartContent/>
        </CartContextProvider>
        </>
      )}
    </>
  );
}
