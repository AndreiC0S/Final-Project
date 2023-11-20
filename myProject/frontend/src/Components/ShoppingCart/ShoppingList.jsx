import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Stripe from "../Stripe_card_pay/stripe2";
import LoginModal from "./LoginModal";

export default function ShoppingList() {
  const { content, totalPrice } = useContext(CartContext);
  const [togglePay, setTogglePay] = useState(false);

  const auth = localStorage.getItem("authenticated");

  let [user, setUser] = useState(auth);

  // console.log("user", user);

  const renderHTML = (content) => {
    
      return (
        <>
          <div className="flex md:flex-row mx-5 my-10 md:my-0">
            <div className="w-full mt-4 md:w-2/5 border-2 border-indigo-600 p-4 rounded-lg">
              <div className="h-[600px] overflow-auto">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center my-4 border-b border-gray-300 pb-4"
                >
                  <img
                    className="w-16 h-16 mr-4 rounded-md"
                    src={item.img}
                    alt="Product"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="text-lg font-semibold">
                      ${item.price * item.qty}
                    </p>
                  </div>
                </div>
              ))}
              </div>
            <div className=" mt-4 bg-gray-100 md:bg-gray-400 rounded-lg p-4 flex flex-col items-center justify-center mt-4 ">
              <div
                
                className="bg-blue-500  text-white font-semibold py-2 px-4 rounded-full"
              >
                TOTAL: ${totalPrice}
              </div> 
              
              {user === 'true' ? (
              <button
              onClick={() => setTogglePay(!togglePay)}
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-full"
            >
              finalizeaza comanda
            </button> 
            ):(<LoginModal/>)}
              
              
              
            </div>
            </div>

            
            {togglePay && (
              <div className="mt-4 md:mt-0 md:ml-10 w-full md:w-3/5 flex items-center justify-center">
                <Stripe totalPrice={totalPrice} cartContent={content} />
              </div>
            )}
          </div>
        </>
      );
    
  };

  return renderHTML(content);
}
