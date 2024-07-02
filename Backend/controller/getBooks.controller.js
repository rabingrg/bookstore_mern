import Book from "../model/book.model.js";

export const getBooks = async (req, res) => {
  try {
    // if (!req.session.user) {
    //   return res.status(401).send("Please login to access this page!");
    // }
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error fetching books: ", error);
    res.status(500).json(error);
  }
};
