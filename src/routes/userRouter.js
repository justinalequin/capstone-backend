const express = require("express");
const { UserModel } = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const UserServices = require("../services/UserServices");

const userRouter = express.Router();

userRouter.post("/create-user", UserServices.createUser);

userRouter.post("/sign-in", UserServices.signIn);

userRouter.get("/sign-out", UserServices.signOut);

module.exports = userRouter;
