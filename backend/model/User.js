import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    
  },  
},
{toJSON:{virtuals:true},toObject:{virtuals:true}}
);

UserSchema.virtual("links",{
  ref:"Link",
  localField:"_id",
  foreignField:"user_id",
})

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.jwtGenerate = async function () {
  return jwt.sign({ id: this._id, username: this.username }, process.env.JWT, {
    expiresIn: "1d",
  });
};

const User = mongoose.model("User", UserSchema);

export default User;
