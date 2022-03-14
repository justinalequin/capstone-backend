const { ConfirmedOrderModel } = require("../models/ConfirmedOrderModel");

const postOrder = async (req, res, next) => {
  try {
    const orderData = req.body.orderData;
    console.log("req.body.orderData: ", req.body.orderData);

    const newOrder = new ConfirmedOrderModel(orderData);

    const savedOrder = await newOrder.save();

    console.log("savedOrder: ", savedOrder);
    res.send(newOrder);
  } catch (error) {
    return next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const foundOrders = await ConfirmedOrderModel.find({});
    res.send(foundOrders);
  } catch (error) {
    next(error);
  }
};

const checkOrder = async (req, res, next) => {
  try {
    //Write Logic to check if date is already booked.
    //This check needs to happen when the check availability button is clicked
  } catch (error) {
    next(error);
  }
};

const ConfirmedOrderServices = {
  postOrder,
  checkOrder,
  getOrders,
};

module.exports = ConfirmedOrderServices;
