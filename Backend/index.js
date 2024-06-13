const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
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
