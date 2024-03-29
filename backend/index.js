var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
let User = require("./routes/user");
let Vehicle = require("./routes/vehicle");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/SS-APP");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Expose-Headers", "Content-Disposition");
  next();
});

app.use("/vehicle", Vehicle);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

module.exports = app;
