import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(req.body);
    res.status( ).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const token = jwt.sign(
      {
        email: req.body.email,
        password: req.body.password,
      },
      "secret",
      {
        expiresIn: "1d",
      }
    );
    const { password, email } = req.body;
    const user = await User.findOne({ email });
    console.log(user)
    if (user) {
      if (user.password !== password) {
        throw new Error("Nuuts ug buruu bn");
      }
      res.status(200).send({
        data: user,
        token: token,
      });
    } else {
      res.send({
        data: "tiim user bhgu",
      });
    }
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const getUserByid = async (req, res) => {
  try {
    const id = req.params.id;
    const UserById = await User.findById({ _id: id });
    res.status(200).send({
      data: UserById,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const AllUser = await User.find({});
    res.status(200).send({
      data: AllUser,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await User.deleteOne({ _id: id });
    res.status(200).send({
      data: deleteUser,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
