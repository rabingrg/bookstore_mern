import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/getBooks.route.js";
import signupRoute from "./route/addUser.route.js";
import addBookRoute from "./route/addbook.route.js";
import getUserRoute from "./route/getUsers.route.js";
import loginRoute from "./route/login.route.js";
import cors from "cors";

const app = express();

app.use(cors()); //to fix cors issue //pnpm i cors
app.use(express.json()); //to parse the request body data from client

//defining routes
app.use("/book", bookRoute);
app.use("/user", signupRoute);
app.use("/book", addBookRoute);
app.use("/user", getUserRoute);
app.use("/login", loginRoute);

dotenv.config();

const PORT = process.env.PORT || 4002;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {});
  console.log("Connected to MongoDB!");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`Serving listening on port ${PORT}`);
});
