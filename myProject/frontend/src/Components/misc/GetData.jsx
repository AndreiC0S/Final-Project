import React, { useEffect, useState } from "react";
import axios from "axios";
import CardBox from "./Card";
import { CartContextProvider } from "../../context/cartContext";
 
const GetData = () => {
//   const [item, setItem] = useState([]);
//   let itemz  
    

// useEffect(()=>{
//   axios.get(`http://localhost:3002/products`)
//       .then(res => {
//         const data = res.data;
//         itemz = data
//         // setItem([data]);
        
//         // console.log(data)
//       })
// },[])
  return (
    <>
      <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
        <div className="flex flex-wrap ">
          <h1 className="w-full text-center my-3 fw-bold">Our Menu</h1>
            {/* <CartContextProvider> */}
              <CardBox 
              // item={itemz}
              /> 
            {/* </CartContextProvider> */}
        </div>
      </div>
    </>
  );
};
 
export default GetData;