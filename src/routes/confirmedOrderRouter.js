const express = require("express");
const ConfirmedOrderServices = require("../services/ConfirmedOrderServices");

const confirmedOrderRouter = express.Router();

confirmedOrderRouter.post("/post-order", ConfirmedOrderServices.postOrder);

confirmedOrderRouter.get("/get-orders", ConfirmedOrderServices.getOrders);

confirmedOrderRouter.get("/check-order", ConfirmedOrderServices.checkOrder);

module.exports = confirmedOrderRouter;
