import express from "express";
import { getUser } from "../controller/getUsers.controller.js";

const router = express.Router();

router.get("/getUser", getUser);

export default router;
