const Book = require("../models/Books");

const findBookByProperty = (key, value) => {
  if (key === "id") {
    return Book.findById(value);
  }

  return Book.findOne({ [key]: value });
};

module.exports = findBookByProperty;
