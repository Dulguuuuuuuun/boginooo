import express from "express";
import { create, getAll, getUrlById} from "../controller/link.js"
const linkRouter = express.Router();
import jwt from "jsonwebtoken";



// const myFirstMiddleware = (req, res, next) => {
//   console.log(token);
//   next();
// };

// const token = jwt.sign(
//     {email:"tushig69@gmail.com",id:69,},"secret"
// )



linkRouter.route("/").post(create).get(getAll);
linkRouter.route("/:id").get(getUrlById);



export default linkRouter;
