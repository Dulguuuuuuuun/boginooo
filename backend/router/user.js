import express from "express";
import jwt from "jsonwebtoken";
import {
  createUser,
  login,
  getUserByid,
  getAllUser,
} from "../controller/user.js";

const userRouter = express.Router();

// const token = jwt.sign({ email: "tushig69@gmail.com", id: 69 }, "secret");

userRouter.route("/").get(getAllUser);
userRouter.route("/:id").get(getUserByid);
userRouter.route("/login").post(login);
userRouter.route("/signup").post(createUser);

export default userRouter;
