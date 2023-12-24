import express from "express";
import { test } from "../controllers/user.controller.js";
import {
  updateUser,
  deleteUser,
  getUserListing,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
// for updating user, we have extra checking, we need to check
// if the person is authenticated or not by using the cookies,
// so we will know which user we are updating.
// when creating the user, we created a token, now we can use that
// token to verify the user for updating user's information
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListing);
router.get("/:id", verifyToken, getUser);
export default router;
