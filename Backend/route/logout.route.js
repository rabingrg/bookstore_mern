import express from "express";
import { logOut } from "../controller/logout.controller.js";

const router = express.Router();

router.post("/", logOut);

export default router;
