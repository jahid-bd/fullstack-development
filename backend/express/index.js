const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.json());
//for req.body()
app.use(morgan("dev"));
app.use(cors());

app.use(express.static("./public"));
// app.use(golbalMidleware);
app.use(require("./routes"));

app.use((req, res, next) => {
  const err = new Error("404 Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log("error", err);
  if (err.status) {
    return res.status(err.status).send(err.message);
  }

  res.status(500).send("Something went wrong");
});

function golbalMidleware(req, res, next) {
  console.log(`${req.method} - ${req.url}`);
  console.log("I am comming from global Midleware");
  next();
}

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  single: Boolean,
  bio: String,
});

const Person = mongoose.model("person", personSchema);

app.listen(8000, () => {
  console.log("App is listining on port 8000");

  mongoose
    .connect("mongodb://localhost:27017/test")
    .then(async () => {
      console.log("Database connected");

      const person = new Person({
        firstName: "Jahid",
        lastName: "Hasan",
        email: "jahidbd9x@gmail.com",
        age: 20,
        single: true,
        bio: "I am a Full-Stack Developer",
      });

      await person.save();
      console.log("Person Created");
      console.log(person);
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      mongoose.connection.close();
    });
});
