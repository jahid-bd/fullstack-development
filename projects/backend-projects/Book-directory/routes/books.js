const router = require("express").Router();
const bookControllers = require("../controller/bookControllers");
const bookPostValidator = require("../controller/validations");
const validate = require("../middleware/validate");

router.get("/", bookControllers.getBooks);
router.post("/", bookPostValidator(), validate, bookControllers.postBooks);

router.get("/:bookId", bookControllers.getBooksById);
router.patch("/:bookId", bookControllers.patchBooksById);
router.put(
  "/:bookId",
  bookPostValidator(),
  validate,
  bookControllers.putBooksById
);
router.delete("/:bookId", bookControllers.deleteBooksById);

module.exports = router;
