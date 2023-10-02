import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";
import * as userListModel from "../models/userList";
import {UserList} from "../types/UserList";

const userListRouter = express.Router();

var jsonParser = bodyParser.json()

userListRouter.get("/", async (req: Request, res: Response) => {
  userListModel.findAll((err: Error, users: UserList[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": users});
  });
});


userListRouter.get("/:id", async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);
  userListModel.findOne(userId, (err: Error, user: UserList) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": user});
  })
});

userListRouter.post("/",jsonParser, async (req: Request, res: Response) => {
  console.log(req.body);
  const newUser: UserList = req.body;
  userListModel.create(newUser, (err: Error, userId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).json({"userId": userId});
  });
});

// Edit user
userListRouter.put("/:id",jsonParser, async (req: Request, res: Response) => {
  const user: UserList = req.body;
  console.log(req.body);
  userListModel.update(user, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    // res.status(200).send();
    res.status(200).json({
      "message": 'success'
      });
  })
});
// Delete user
userListRouter.delete("/:id",jsonParser, async (req: Request, res: Response) => {
  const user: UserList = req.body;
  console.log(req.body);
  userListModel.deleteUser(user, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    // res.status(200).send();
    res.status(200).json({
      "message": 'success'
      });
  })
});
export {userListRouter};