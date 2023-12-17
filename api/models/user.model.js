import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  //record two important info:
  // time of creation and time of update of the user
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
// we want to export this to use it any where
export default User;
