import express from "express";
import { signupUser } from "../controller/signup.controller.js";

const router = express.Router();

router.post("/signup", signupUser); //.post for post request

export default router;
