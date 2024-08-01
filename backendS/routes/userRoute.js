import { Router } from "express";
import {
  getAllUsers,
  createUser,
  loginUser,
  resetPassword,
} from "../controller/userController.js";
import { verifyEmail } from "../utils/verifyEmail.js";

const userRouter = Router();

userRouter.get("/fetchallusers", getAllUsers);
userRouter.get('/verify-email', verifyEmail);
userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
userRouter.post("/reset-password", resetPassword);

export default userRouter;
