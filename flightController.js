const fs = require("fs");
const app = require("./app");

const flights = JSON.parse(
  fs.readFileSync(`${__dirname}/flights.json`, "utf-8")
);

exports.getAllFlights = (req, res) => {
  res.status(200).json({
    status: "success",
    results: flights.length,
    data: {
      flights,
    },
  });
};

exports.getFlight = (req, res) => {
  const param = req.params.id;

  if (param > flights.length - 1) {
    res.status(404).json({
      status: "fail",
      message: "invalid request⚠️",
    });
    return;
  }

  const flight = flights[param];

  console.log(param);
  res.status(200).json({
    status: "success✈️",
    data: {
      flight,
    },
  });
};

exports.createFlight = (req, res) => {
  //automatically creates new id for incoming flight
  const newId = flights[flights.length - 1].id + 1;

  const newflight = Object.assign({ id: newId }, req.body);

  flights.push(newflight);
  //write the newly created tour to the local storage
  fs.writeFile(`${__dirname}/flights.json`, JSON.stringify(flights), (err) => {
    res.status(201).json({
      status: "success✈️",
      message: "successfully created flight",
      data: {
        newflight,
      },
    });
  });
};

exports.updateFlight = (req, res) => {
  const param = req.params.id;

  if (param > flights.length - 1) {
    res.status(404).json({
      status: "fail",
      message: "invalid request⚠️",
    });
    return;
  }

  const { title, time, price, date } = req.body;

  if (title) {
    flights[param].title = title;
  }
  if (time) {
    flights[param].time = time;
  }
  if (price) {
    flights[param].price = price;
  }
  if (date) {
    flights[param].date = date;
  }

  fs.writeFile(`${__dirname}/flights.json`, JSON.stringify(flights), (err) => {
    res.status(200).json({
      status: "success✈️",
      message: "successfully updated flight",
    });
  });
};

exports.deleteFlight = (req, res) => {
  const param = req.params.id;

  if (param > flights.length - 1) {
    res.status(404).json({
      status: "fail",
      message: "invalid request⚠️",
    });
    return;
  }

  flights.splice(param, 1);

  fs.writeFile(`${__dirname}/flights.json`, JSON.stringify(flights), (err) => {
    res.status(204).json({
      status: "success",
      message: "successfully deleted flight",
      data: null,
    });
  });
};
