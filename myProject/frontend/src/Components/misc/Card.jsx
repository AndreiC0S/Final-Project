// import React from 'react'

//  const Card = ({item}) => {
//     return(
//         <>
//         <div className='px-4'>
//             <div className='flex-row justify-center'>
//         {item.map((Val) => {
//             return(
//                 <div
//                 className='md:w-1/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 my-3 py-3 border-0'
//                 key={Val.id}
//                 >
//                     <div className='w-full rounded rounded-t text-center'>
//                         <img src={Val.img} alt={Val.title} className='photo w-3/4' />
//                     </div>
//                     <div className='flex-auto p-6'>
//                         <div className='mb-3 fw-bold fs-4'>
//                             {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
//                             {Val.price}
//                         </div>
//                         <div className='mb-0'>{Val.desc}</div>
//                     </div>
//                 </div>
//             )
//         })}
//             </div>
//         </div>
//         </>
//     )
//  }
//  export default Card;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./card.css"

const CardBox = ({ item }) => {
  
  return (
    <>

    <div id="cardBoxResp" className="flex flex-wrap justify-center items-center w-[75vw] mx-auto ">
    {item.map((Val) => {
        return (
          <div
            className=" flex rounded break-words bg-white border-gray-300  mb-5 mr-6"
            key={Val.id}
          >
            <Card className="w-96">
              <CardHeader shadow={false} floated={false} className="h-48" style={{backgroundImage:`url(${Val.img})`, backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>
                {/* <img
                  src={Val.img}
                  alt={Val.title}
                  className="w-full h-full object-cover"
                /> */}
              </CardHeader>
              <CardBody>
                <div className="flex items-center justify-between mb-2">
                  <Typography color="blue-gray" className="font-medium">
                    {Val.title}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    {Val.price}
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
