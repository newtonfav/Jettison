const express = require("express");
const flightController = require("../flightController");

const route = express.Router();

route
  .route("/")
  .get(flightController.getAllFlights)
  .post(flightController.createFlight);

route
  .route("/:id")
  .get(flightController.getFlight)
  .patch(flightController.updateFlight)
  .delete(flightController.deleteFlight);

module.exports = route;
