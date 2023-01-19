import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import userRouter from "./router/user.js"
import linkRouter from "./router/link.js";

 const app = express();

dotenv.config();


// const myFirstMiddleware = (req, res, next)=>{
//   console.log('res iin mothodig hewlene',req.method)
//   next()
// }

 const uri = process.env.MONGODB || "";
 const port = process.env.PORT || 6969;
app.use(cors()); 
app.use(express.json());
app.use("/user", userRouter)
app.use("/link",linkRouter);



const connect = () => {
        console.log(uri,);

      try {

    mongoose.set("strictQuery", true);
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected MongoDB");
    });
  } catch (error) {
    console.error("Couldn't connect");
    process.exit(1);
  }
};





app.listen(port, async () => {
  connect();
  console.log(`Server running at localhost:${port}`);
});

