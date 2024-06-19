import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/book", bookRoute);

dotenv.config();

const PORT = process.env.PORT || 4002;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB!");
} catch (error) {
  console.log(error);
}

//defining routes

app.listen(PORT, () => {
  console.log(`Serving listening on port ${PORT}`);
});
