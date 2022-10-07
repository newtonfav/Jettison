const express = require("express");
const route = require("./routes/flightRoute");

const app = express();

app.use(express.json());

app.use("/api/v1/flight", route);

module.exports = app;
