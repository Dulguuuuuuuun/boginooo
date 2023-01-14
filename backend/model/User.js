// import mongoose from "mongoose";
// import { nanoid } from "nanoid";
// const UserSchema = new mongoose.Schema({
//     id:{
//         type:Number
//     },
//     url:{
//         type:String,

//     },

//     shortId:String
// });

// UserSchema.pre("save" , function(next) {
//     this.shortId = nanoid(5),
//     next()
// })

// const  User = mongoose.model("User", UserSchema);

// export default User;