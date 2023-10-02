import React, { useState, useEffect, useContext } from "react";
import "./shoppingCart2.css";
import { CartContext } from "../../context/cartContext";

export default function CartContent() {
  const { content, setContent } = useContext(CartContext);

  // const [cartItems,setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")))
  // console.log(cartItems)

  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const [one, setOne] = useState(1);

  useEffect(() => {
    if(content){
      const updateCartitems = content.map(item => {
        if(item.qty < 1){
          item.qty = 1
        }
        return item
      })
      setContent(updateCartitems)
    }
  },[]);

  const increaseQty = (index) => {
    const updatedCartItems = [...content];
    updatedCartItems[index].qty += 1;
    setContent(updatedCartItems)
  }

  const decreaseQty = (index) => {
    const updatedCartItem = [...content]
    if(updatedCartItem[index].qty > 1){
      updatedCartItem[index].qty -= 1;
    setContent(updatedCartItem)
    }
  }

  // const updateQty = (id, newQty) => {
  //   const updateItems = content.map((item) => {
  //     if (item.id === id ) {
  //       setContent(content);
  //       return { ...item, qty: newQty };
  //     } 
  //     // else if(item.qty <= 1 && item.id === id){
  //     //   console.log('da')
  //     //   return item,{ ...item, qty: 1 }
  //     // } 
  //     else{
  //       item.qty= 0
  //       return item
  //     }
  //     // else if(item.id === id && item.qty < 2){
  //     //   item.qty = 1
  //     //   return item
  //     // }
  //   });
  //   setContent(updateItems);
  // };

  return (
    <>
      <div id="kart-box" className="">
        <div className="">
          <div id="kart-box-content" class="kart-box-content">
            {content.map((Val,index) => {
              return (
                <div key={index} class="addItemToCart">
                  <img src={Val.img} class="single-product-img img" alt="" />
                  <div>
                    <h3 className=" titleProduct">{Val.title} </h3>

                    <div class="detalii ">
                      <p className="mb-[2vh]">Cocker Spaniel </p>
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
                    </div>
                  </div>

                  <div class="pPriceBox">
                    <p> Price: </p>
                    <p class="pPrice" data-price="" data-quantity="">
                      {(Val.qty) * (Val.price) + " $"}
                    </p>
                  </div>
                  <button class="deleteProduct">X</button>
                </div>
              );
            })}
          </div>
          <div id="total-box">
            <p class="totalP">Total:</p>
            <p id="total" class="totalPrice">
              0
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
