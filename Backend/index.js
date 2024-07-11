import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/getBooks.route.js";
import signupRoute from "./route/addUser.route.js";
import addBookRoute from "./route/addbook.route.js";
import getUserRoute from "./route/getUsers.route.js";
import loginRoute from "./route/login.route.js";
import logoutRoute from "./route/logout.route.js";
import cors from "cors";
import session from "express-session";
import path from "path";

const app = express();
// app.use(
//   session({
//     secret: "rabinbook_store",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

app.use(cors()); //to fix cors issue //pnpm i cors
app.use(express.json()); //to parse the request body data from client

//defining routes
app.use("/book", bookRoute);
app.use("/user", signupRoute);
app.use("/book", addBookRoute);
app.use("/user", getUserRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);

dotenv.config();

const PORT = process.env.PORT || 4002;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {});
  console.log("Connected to MongoDB!");
} catch (error) {
  console.log(error);
}

if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();
  app.use(express.static("Frontend/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirPath, "Frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Serving listening on port ${PORT}`);
});
