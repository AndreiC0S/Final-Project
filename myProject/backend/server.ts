import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import * as bodyParser from "body-parser";

import {userRouter} from "./routes/userRouter";
import {productRouter} from "./routes/productRouter";
import cors from 'cors';
import path from 'path';
import { userListRouter } from './routes/UserListRouter';


dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT;  
app.use(cors());
app.use(bodyParser.json());




app.use("/users", userRouter);
app.use("/users-list", userListRouter);
app.use("/products", productRouter);
app.get('/', (req: Request, res: Response) => {
  // res.send('Express + TypeScript Server');
  res.sendFile(path.join(__dirname+'/acasa.html'));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});