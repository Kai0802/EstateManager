import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
  // await newUser.save();
  // res.status(201).json("User created successfully");
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // User.findOne({
    //   where: {
    //     email: email,
    //   },
    // }).then(function (user) {
    //   if (!user) {
    //     res.redirect("/");
    //   } else {
    //     bcrypt.compareSync(password, user.password);
    //   }
    // });
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found!"));
    } else {
      const validPassword = bcrypt.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, "Wrong credential!"));
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(validUser); // httpOnly: true make our cookie safer
    }
  } catch (error) {
    next(error);
  }
};
