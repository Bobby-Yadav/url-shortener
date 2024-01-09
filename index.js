const express = require("express");
const app = express();
const path = require("path");
const randomString = require("randomstring");
const mongoDB = require("./config/mongoose");
const Link = require("./models/linkModels");

const homeController = require('./controllers/HomeController')

const port = 8005;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("./assets"));

app.set("view engine", "ejs");
app.set("views", "./views");

// app.get('/:id',homeController.handleRedirect)
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log("Server is running!", port);
});
