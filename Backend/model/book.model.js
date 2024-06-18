const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  price: Number,
  title: String,
  image: String,
  category: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
