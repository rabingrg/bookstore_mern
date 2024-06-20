import express from "express";
import { getBooks } from "../controller/getBooks.controller.js";
const router = express.Router();

router.get("/getBooks", getBooks); //.get for get request

export default router;
