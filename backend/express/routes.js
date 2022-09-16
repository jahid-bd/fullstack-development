const route = require("express").Router();
const {
  aboutController,
  homeController,
  booksController,
  helpController,
} = require("./controller");

function localMideleWare(req, res, next) {
  console.log("I am comming from locale Midleware");
  next();
}

route.get("/", homeController);

route.get("/about", localMideleWare, aboutController);

route.get("/help", helpController);

route.get("/books", booksController);

module.exports = route;
