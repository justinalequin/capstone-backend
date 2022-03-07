const mongoose = require("mongoose");

const uuid = require("uuid");

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, default: () => uuid.v4() },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", userSchema);

const UserController = {
  UserModel,
};

module.exports = UserController;
