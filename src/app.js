require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRouter = require("./routes/userRouter");
var cors = require("cors");
const productRouter = require("./routes/productRouter");

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log("We in it!"))
  .catch(() => console.log("It didn't happen dude"));

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(userRouter);
app.use(productRouter);

app.listen(5100, () => {
  console.log("EV RENTALS BACKEND IS LIVE");
});
