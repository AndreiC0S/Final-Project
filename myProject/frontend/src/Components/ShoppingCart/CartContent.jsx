import React, { useState, useEffect, useContext } from "react";
import "./shoppingCart2.css";
import { CartContext } from "../../context/cartContext";


export default function CartContent() {
  const { content, setContent } = useContext(CartContext);

  const { totalPrice, setTotalPrice } = useContext(CartContext);

  

  
  const increaseQty = (index) => {
    const updatedCartItems = [...content];
    updatedCartItems[index].qty += 1;
    setContent(updatedCartItems);
    
  };

  const decreaseQty = (index) => {
    const updatedCartItem = [...content];
    if (updatedCartItem[index].qty > 1) {
      updatedCartItem[index].qty -= 1;
      setContent(updatedCartItem);
      
    }
  };

  const remove = (id) => {
    setContent((current) =>
      current.filter((item) => {
        if (item.qty > 1) {
          return item.id !== id;
        } else {
          return item.id !== id;
        }
      })
    );
  };
  
 
  return (
    <>
    
    
      <div id="kart-box" className="">
      
        <div className="">
          <div id="kart-box-content" class="kart-box-content">
        
            {content.map((Val, index) => {
              return (
                <div key={index} class="addItemToCart">
                  <img src={Val.img} class="single-product-img img" alt="" />
                  <div>
                    <h3 className=" titleProduct">{Val.title} </h3>

                    <div class="detalii ">
                      <p className="mb-[2vh]"> </p>
                      <div id="btnContainer">
                        <p class="qtyItems">Qty: {Val.qty} </p>

                        <button
                          class="btnSubProduct buttonCart"
                          onClick={() => decreaseQty(index)}
                        >
                          -
                        </button>

                        <button
                          class="btnAddProduct  "
                          onClick={() => increaseQty(index)}
                        >
                          +
                        </button> 
                      </div>
                        <p>{Val.price}$ /produs</p>
                    </div>
                  </div>

                  <div class="pPriceBox">
                    <p> Total: </p>
                    <p class="pPrice" data-price="" data-quantity="">
                      {Val.qty * Val.price + " $"}
                    </p>
                  </div>
                  <button class="deleteProduct" onClick={() => remove(Val.id)}>
                    X
                  </button>
                </div>
              );
            })}
          
      </div>
          </div>
          
      <div className=" flex flex-col items-center  bg-white rounded-md z-50" >
            <p className="" >Total:  {totalPrice} $</p>     
          {totalPrice >0 &&(
            <a href="/shopping-list" className="bg-green-500 rounded-md w-full">finalizeaza comanda</a>
            
              
            )}
      </div>
        </div>
    </>
  );
}
