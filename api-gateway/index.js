const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const tripController = require("./controller/trip");

app.use(bodyParser.json());
app.use(cors());

app.use("/trips", tripController.getTrips);

app.listen(4000, () => {
  console.log("API-GATEWAY is on");
});
