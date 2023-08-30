import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";
import * as productModel from "../models/products";
import {Products} from "../types/Products";

const productRouter = express.Router();

var jsonParser = bodyParser.json()

productRouter.get("/", async (req: Request, res: Response) => {
    productModel.findAllP((err: Error, product: Products[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": product});
  });
});


productRouter.get("/:id", async (req: Request, res: Response) => {
  const productId: number = Number(req.params.id);
  productModel.findOneP(productId, (err: Error, product: Products) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": product});
  })
});

productRouter.post("/",jsonParser, async (req: Request, res: Response) => {
  console.log(req.body);
  const newProd: Products = req.body;
  productModel.createP(newProd, (err: Error, productId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).json({"userId": productId});
  });
});

// // Edit user
// userRouter.put("/:id",jsonParser, async (req: Request, res: Response) => {
//   const user: User = req.body;
//   console.log(req.body);
//   userModel.update(user, (err: Error) => {
//     if (err) {
//       return res.status(500).json({"message": err.message});
//     }

//     // res.status(200).send();
//     res.status(200).json({
//       "message": 'success'
//       });
//   })
// });
// // Delete user
// userRouter.delete("/:id",jsonParser, async (req: Request, res: Response) => {
//   const user: User = req.body;
//   console.log(req.body);
//   userModel.deleteUser(user, (err: Error) => {
//     if (err) {
//       return res.status(500).json({"message": err.message});
//     }

//     // res.status(200).send();
//     res.status(200).json({
//       "message": 'success'
//       });
//   })
// });
export {productRouter};
