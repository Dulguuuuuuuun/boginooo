import express from "express";
import { create, getAll, getUrlById} from "../controller/link.js"
const linkRouter = express.Router();

linkRouter.route("/").post(create).get(getAll)
linkRouter.route("/:id").get(getUrlById);



export default linkRouter;
