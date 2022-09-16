const { body } = require("express-validator");

const bookPostValidator = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("Title is required")
      .bail()
      .isString()
      .withMessage("Please Enter a valid String title")
      .bail()
      .trim()
      .isLength({ min: 5, max: 30 })
      .withMessage("Title must be between 5-30 chars"),

    body("description")
      .notEmpty()
      .withMessage("Description is required")
      .bail()
      .isString()
      .withMessage("Please Enter a valid String")
      .bail()
      .trim()
      .isLength({ min: 20, max: 500 })
      .withMessage("Description must be between 20-500 chars"),

    body("price")
      .notEmpty()
      .withMessage("Price is required")
      .bail()
      .isNumeric()
      .withMessage("Please Enter a valid numeric price"),

    body("author")
      .notEmpty()
      .withMessage("Author is required")
      .bail()
      .trim()
      .isString()
      .withMessage("Please Enter a valid String title")
      .bail()
      .isLength({ min: 3, max: 30 })
      .withMessage("Author must be between 5-30 chars"),

    body("catagories")
      .notEmpty()
      .withMessage("Catagories is required")
      .bail()
      .isString()
      .withMessage("Please provide a comma seperated string")
      .customSanitizer((value) => {
        return value.split(",").map((item) => item.trim());
      }),
    body("coverPage").optional(),
  ];
};

module.exports = bookPostValidator;
