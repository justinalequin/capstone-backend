const mongoose = require("mongoose");
const uuid = require("uuid");

const confrimedOrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, default: () => uuid.v4() },
  vehicleId: { type: String, required: true },
  userId: { type: String, required: true },
  image: { type: String, required: false },
  price: { type: Number, required: true },
  brand: { type: String, require: false },
  title: { type: String, require: false },
  daysIsRented: [{ type: String, require: false }],
});

const ConfirmedOrderModel = mongoose.model(
  "ConfirmedOrder",
  confrimedOrderSchema
);

const ConfirmedOrderController = {
  ConfirmedOrderModel,
};

module.exports = ConfirmedOrderController;
