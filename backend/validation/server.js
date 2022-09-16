const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "Ok" });
});

// *** Custom Validation ***
// app.post("/", (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ error: "Name, Email or Password Invalid" });
//   }

//   if (name.length < 3 || name.length > 30) {
//     return res.status(400).json({
//       error: "Name must be provide at least min 3 char or max 10 char",
//     });
//   }

//   if (typeof name != "string") {
//     return res.status(400).json({ error: "Name must be a valid String" });
//   }

//   res.status(200).json(req.body);
// });

// *** Express Validation
const reqBody = {
  name: "Jahid Hasan", //Required
  email: "jahidbd9x@gmail.com", //Required
  password: "pass123", //Required
  confirmPassword: "pass123", //Required
  bio: "Full stack web developer",
  address: {
    city: "Rajshahi",
    postcode: 6204,
  },
  skills: "Javascript, React, NodeJs",
};

const registerValidation = [
  body("name")
    .trim()
    .isString()
    .withMessage("Name must be a valid String")
    .bail()
    .isLength({ min: 5, max: 30 })
    .withMessage("Name must be between 5-30 charecters"),
  body("email")
    .normalizeEmail({ all_lowercase: true })
    .isEmail()
    .withMessage("Pease Provide a valid Email")
    .bail()
    .custom((value) => {
      if (value === "jahid1@gmail.com") {
        throw new Error("Email already exist");
      }
      return true;
    }),
  body("password")
    .isString()
    .withMessage("Password must be a valid String")
    .bail()
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be between 5-20 chars")
    .bail()
    .matches(
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/
    )
    .withMessage(
      "Password should be contain uppercase, lowercase, digit and specital chars"
    ),
  body("confirmPassword")
    .isString()
    .withMessage("Password must be valid String")
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password does not mached");
      }
      return true;
    }),
  body("bio")
    .optional()
    .trim()
    .isLength({ min: 20, max: 300 })
    .withMessage("Bio must be between 20-300 chars"),
  body("address")
    .optional()
    .custom((value) => {
      if (!Array.isArray(value)) {
        throw new Error("Address must be an array");
      }
      return true;
    }),
  body("address.*.city")
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage("City must be contain between 3-20 chars"),
  body("address.*.zip").isNumeric().withMessage("Zip must be Numeric"),
  body("skills")
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage("Skills must be a seperated string")
    .bail()
    .customSanitizer((value) => {
      return value.split(",").map((item) => item.trim());
    }),
];

const errorValidate = (req, res, next) => {
  const errorFormator = ({ msg, param }) => {
    return `[${param}]: ${msg}`;
  };

  const error = validationResult(req).formatWith(errorFormator);

  if (!error.isEmpty()) {
    return res.status(400).json(error.mapped());
  }
  next();
};

app.post("/", registerValidation, errorValidate, (req, res) => {
  res.status(201).json(req.body);
});

app.listen(8000, () => {
  console.log("App is listining on port 8000");
});
 