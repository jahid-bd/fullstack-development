const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      default: 0,
    },
    author: {
      type: String,
      required: true,
    },
    catagories: {
      type: [String],
    },
    coverPage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("books", BookSchema);

module.exports = Book;
