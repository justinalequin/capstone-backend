const express = require("express");
const { UserModel } = require("../controllers/UserController");

const userRouter = express.Router();

userRouter.post("/create-user", (req, res) => {
  const user = req.body.user;

  const newUser = new UserModel({
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    password: user.password,
  });

  newUser.save().then((savedUser) => {
    console.log("savedUser: ", savedUser);

    const cleanSavedUser = {
      id: savedUser.id,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      userName: savedUser.userName,
    };

    res.send(cleanSavedUser);
  });
});

userRouter.post("/sign-in", async (req, res) => {
  const userCredentials = req.body.userCredentials;

  const foundUser = await UserModel.findOne({
    userName: userCredentials.userName,
    password: userCredentials.password,
  });

  const cleanFoundUser = {
    id: foundUser.id,
    firstName: foundUser.firstName,
    lastName: foundUser.lastName,
    userName: foundUser.userName,
  };

  res.send(cleanFoundUser);
});

module.exports = userRouter;
