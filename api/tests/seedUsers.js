import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const users = [
  {
    username: "user1",
    email: "user1@example.com",
    password: bcrypt.hashSync("password1", 10),
  },
  {
    username: "user2",
    email: "user2@example.com",
    password: bcrypt.hashSync("password2", 10),
  },
  {
    username: "user3",
    email: "user3@example.com",
    password: bcrypt.hashSync("password3", 10),
  },
  {
    username: "user4",
    email: "user4@example.com",
    password: bcrypt.hashSync("password4", 10),
  },
  {
    username: "user5",
    email: "user5@example.com",
    password: bcrypt.hashSync("password5", 10),
  },
];

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected...");
    User.insertMany(users)
      .then(() => {
        console.log("Users added successfully");
        mongoose.disconnect();
      })
      .catch((error) => {
        console.error("Error adding users:", error);
        mongoose.disconnect();
      });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
