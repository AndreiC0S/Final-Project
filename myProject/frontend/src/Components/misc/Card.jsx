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

const CardBox = ({ item }) => {
  const { content, setContent } = useContext(CartContext);

  // const [check, setCheck] = useState(false);

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
      // console.log("gol");
      setContent([...content, newContent]);
      // console.log("first content added ");
    } else{
      const existaObiect = content.some((itemA) => itemA.id === newContent.id);
      if (existaObiect) {
        // console.log('exista obiect')
        setContent(prevArrayA =>
          prevArrayA.map(itemA =>
            itemA.id === newContent.id ? { ...itemA, qty: itemA.qty + 1 } : itemA
          )
        );
        // console.log('qty++')
      } else {
        setContent([...content, newContent]);
        // console.log("content added");
      }
    }
  };

  return (
    <>
      <div
        id="cardBoxResp"
        className="flex flex-wrap justify-center items-center w-[75vw] mx-auto  "
      >
        {item.map((Val) => {
          return (
            <div
              className=" flex rounded break-words bg-white border-gray-300  mb-5 mr-6"
              key={Val.id}
            >
              <Card className="w-96 z-30">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="h-48"
                  style={{
                    backgroundImage: `url(${Val.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                ></CardHeader>
                <CardBody>
                  <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className="font-medium">
                      {Val.title}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      {Val.price + "$"}
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    {Val.desc}
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
                        Val.img,
                        Val.title,
                        Val.category,
                        Val.price
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
        ;
      </div>
    </>
  );
};
export default CardBox;
