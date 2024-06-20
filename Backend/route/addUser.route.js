import express from "express";
import { signupUser } from "../controller/addUser.controller.js";

const router = express.Router();

router.post("/signup", signupUser); //.post for post request

export default router;
