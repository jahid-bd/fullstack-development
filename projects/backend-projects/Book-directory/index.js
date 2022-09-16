const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bookRoutes = require("./routes/books");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1/books", bookRoutes);

// const CONNECTION_URL = ''
const PORT = process.env.PORT || 4444;

mongoose
  .connect("mongodb://127.0.0.1:27017/books-directory", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`App is listining on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
