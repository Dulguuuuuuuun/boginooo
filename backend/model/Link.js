import mongoose from "mongoose";
import { nanoid } from "nanoid";


const LinkSchema = new mongoose.Schema({
  url: {
    type: String,
  },

  shortId: {
    type:String
  },
  user_id:{
    type:String,
    required : true,
    ref:"User"
  },
  
});

LinkSchema.pre("save", function (next) {
  (this.shortId = nanoid(5)), next();
});

const Link = mongoose.model("Link", LinkSchema);

export default Link;
