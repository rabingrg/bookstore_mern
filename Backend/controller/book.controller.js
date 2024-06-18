import Book from "../model/book.model";

export const getBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error fetching books: ", error);
    res.status(500).json(error);
  }
};
