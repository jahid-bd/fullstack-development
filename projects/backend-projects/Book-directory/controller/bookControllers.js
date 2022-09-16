const Books = require("../models/Books");
const findBookByProperty = require("../services/bookdb");

const postBooks = async (req, res) => {
  const { title, description, price, author, catagories, coverPage } = req.body;

  try {
    // const dbTitle = Books.findOne({ [title]: title });
    // const dbPrice = Books.findOne({ price: price });

    // console.log(dbTitle);

    // if (dbTitle) {
    //   res.status(400).json({ message: "The book already exist" });
    // }

    const books = new Books({
      title,
      description,
      price,
      author,
      catagories,
      coverPage,
    });

    await books.save();

    res.status(201).json(req.body);
  } catch (e) {
    console.log(e);
  }
};

const getBooksById = async (req, res) => {
  const id = req.params.bookId;
  // console.log(id);
  try {
    const book = await findBookByProperty("id", id);

    if (!book) {
      return res.status(401).json({ message: "Book not Found" });
    }

    res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
  }
};

const putBooksById = async (req, res) => {
  const id = req.params.bookId;

  try {
    const book = await findBookByProperty("id", id);

    if (!book) {
      return res.status(404).json({ message: "Book Not Found" });
    }

    const updatedBook = await Books.findOneAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.status(201).json(updatedBook);
  } catch (e) {
    console.log(e);
  }
};

const patchBooksById = async (req, res) => {
  const id = req.params.bookId;

  try {
    const book = await findBookByProperty("id", id);

    if (!book) {
      return res.status(401).json({ message: "Book not Found" });
    }
  } catch (e) {}
};

const deleteBooksById = async (req, res) => {
  const id = req.params.bookId;
  // console.log(id);
  try {
    const book = await findBookByProperty("id", id);

    if (!book) {
      return res.status(401).json({ message: "User not Found" });
    }

    book.remove();

    res.status(203).json({ message: "Book removed successfuly" });
  } catch (e) {
    console.log(e.message);
  }
};
const getBooks = async (req, res) => {
  try {
    const books = await Books.find();

    res.status(200).json(books);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getBooks,
  postBooks,
  getBooksById,
  putBooksById,
  patchBooksById,
  deleteBooksById,
};
