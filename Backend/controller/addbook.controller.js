import Book from "../model/book.model.js";

const addBook = async (req, res) => {
  try {
    const { name, title, price, category, image } = req.body;
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res.status(400).json({ message: "Book already exist." });
    }
    const newBook = new Book({
      name,
      title,
      price,
      category,
      image,
    });
    await newBook.save();
    return res.status(201).json({ message: "Book successfully added." });
  } catch (error) {
    console.log("Error in adding book: ", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export default addBook;
