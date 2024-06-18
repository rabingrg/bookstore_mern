const express = require("express");
// import { getBooks } from "../controller/book.controller";
const getBooks = require("../controller/book.controller");

const router = express.Router();

router.get("/", getBooks);

export default router;
