exports.homeController = (req, res) => {
  const title = "Home Page";
  res.render("pages/home", { title });
};

exports.aboutController = (req, res) => {
  const title = "About Page";
  res.render("pages/about", { title });
};

exports.helpController = (req, res) => {
  const title = "Help Page";
  res.render("pages/help", { title });
};

const books = [
  {
    id: "1",
    name: "Js mastery",
    price: 500,
  },
  {
    id: "2",
    name: "Programming Contest",
    price: 700,
  },
];

exports.booksController = (req, res) => {
  let result = books;
  if (req.query.price == "500") {
    result = result.filter((book) => book.price <= 500);
    res.json(result);
  } else if (req.query.price == "1000") {
    result = result.filter((book) => book.price <= 1000);
    res.json(result);
  } else {
    res.json(result);
  }
};
