import { Router } from "express";
import * as US from './user.service.js';

const userRouter = Router();

// sign up user
userRouter.post("/signup" , US.signUp)

// sign in user
userRouter.post("/signin" , US.signIn)

export default userRouter