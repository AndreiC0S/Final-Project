import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./card.css";
import { CartContext } from "../../context/cartContext";
import axios from "axios";

const CardBox = () => {
  const { content, setContent } = useContext(CartContext);

  const [dataItem, setDataItem] = useState([]);

  const addContent = (id, img, title, category, price, qty = 1) => {
    let newContent = {
      id: id,
      img: img,
      title: title,
      category: category,
      price: price,
      qty: qty,
    };

    if (Object.keys(content).length === 0) {
      setContent([...content, newContent]);
    } else {
      const existaObiect = content.some((itemA) => itemA.id === newContent.id);
      if (existaObiect) {
        setContent((prevArrayA) =>
          prevArrayA.map((itemA) =>
            itemA.id === newContent.id
              ? { ...itemA, qty: itemA.qty + 1 }
              : itemA
          )
        );
      } else {
        setContent([...content, newContent]);

        
      }
    }
  };
 
  useEffect(() => {
    
    axios
      .get("http://localhost:3002/products", {
        responseType: "json",
      })
      .then(function (response) {
        // console.log(response.data.data);
        setDataItem(response.data.data)
      });
  },[]);



  return (
    <>
      <div
        id="cardBoxResp"
        className="flex flex-wrap justify-center items-center w-[75vw] mx-auto  "
      >
        {dataItem.map((Val, index) => {
          
          return (
            <div
              className=" flex rounded break-words bg-white border-gray-300  mb-5 mr-6"
              key={Number(Val.id)}
            >
              <Card className="w-96 h-[500px] z-30 overflow-auto">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="h-48"
                  children={false}
                  style={{
                    backgroundImage: `url(${Val.poza_url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                ></CardHeader>
                <CardBody>
                  <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className="font-medium">
                      {Val.nume_produs}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      {Number(Val.pret_produs) + "$"}
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    {Val.descriere_produs}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                    onClick={() =>
                      addContent(
                        Val.id,
                        Val.poza_url,
                        Val.nume_produs,
                        Val.categorie_produs,
                        Val.pret_produs
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
        {/* {dataItem.map((Val, index) => {
          console.log(Val.data)
          return (
            <div
              className=" flex rounded break-words bg-white border-gray-300  mb-5 mr-6"
              key={index}
            >
              <Card className="w-96 z-30">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="h-48"
                  children={false}
                  style={{
                    backgroundImage: `url(${Val.data[index].poza_url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                ></CardHeader>
                <CardBody>
                  <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className="font-medium">
                      {Val.data[index].nume_produs}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      {Number(Val.data[index].pret_produs) + "$"}
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    {Val.data[index].descriere_produs}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                    onClick={() =>
                      addContent(
                        Val.data[index].id,
                        Val.data[index].poza_url,
                        Val.data[index].nume_produs,
                        Val.data[index].categorie_produs,
                        Val.data[index].pret_produs
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })} */}
        ;
      </div>
    </>
  );
};
export default CardBox;
