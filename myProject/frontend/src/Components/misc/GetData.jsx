import React, { useState } from "react";
import Data from "./Data";
import CardBox from "./Card";
import { CartContextProvider } from "../../context/cartContext";
 
const GetData = () => {
  const [item, setItem] = useState(Data);
  
//   Object.keys(item).forEach(key => {
//     console.log(key, item[key]);
//   });
  return (
    <>
      <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
        <div className="flex flex-wrap ">
          <h1 className="w-full text-center my-3 fw-bold">Our Menu</h1>
            <CartContextProvider>
              <CardBox item={item}/> 
            </CartContextProvider>
        </div>
      </div>
    </>
  );
};
 
export default GetData;