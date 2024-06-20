import express from "express";
import { logIn } from "../controller/login.controller.js";

const router = express.Router();

router.post("/", logIn);

export default router;
