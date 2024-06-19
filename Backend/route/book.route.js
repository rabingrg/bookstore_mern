import express from "express";
import { getBooks } from "../controller/book.controller.js";
const router = express.Router();

router.get("/", getBooks); //.get for get request

export default router;
