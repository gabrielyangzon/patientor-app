import express from "express";

const diagnoseRouter = require("./controller/diagnoseController");

const patientRouter = require("./controller/patientController");
const middleware = require("./util/middleware");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(middleware.requestLogger);

app.get("/api/ping", (_request, response) => {
  response.status(200).send("pong");
});

app.use("/api/diagnose", diagnoseRouter);
app.use("/api/patients", patientRouter);
module.exports = app;
