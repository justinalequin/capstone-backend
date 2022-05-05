require("dotenv").config();
const express = require("express");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userRouter = require("./routes/userRouter");
var cors = require("cors");
const productRouter = require("./routes/productRouter");
const UserModel = require("./models/UserModel");
const confirmedOrderRouter = require("./routes/confirmedOrderRouter");

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log("We in it!"))
  .catch((error) => console.log("It didn't happen dude", error));

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(cookieParser());
app.use(bodyParser.json());

app.use(async (req, res, next) => {
  const sessionToken = req.cookies.session_token;

  if (!sessionToken) {
    next();
    return;
  }

  const { userId } = jwt.verify(sessionToken, process.env.JWT_SECRET_KEY);

  const user = await UserModel.findOne({ id: userId });

  req.user = user;

  next();
});

app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", confirmedOrderRouter);

app.listen(5100, () => {
  console.log("EV RENTALS BACKEND IS LIVE");
});

app.use((error, req, res, next) => {
  console.error(error);

  if (error.message === "User is not loggin in") {
    res.status(401).send({ error: "User not logged in" });
    return;
  }

  if (error.message === "User is not admin") {
    res.status(401).send({ error: "User is not authorized" });
    return;
  }

  res.status(500).send({
    error: "An error hapened",
  });
});
