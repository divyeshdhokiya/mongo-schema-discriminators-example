var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

var employeesRouter = require("./routes/employees");

var app = express();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect("mongodb://127.0.0.1:27017/schema-discriminator", options)
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/employees", employeesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
