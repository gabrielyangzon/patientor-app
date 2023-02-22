import { Response } from "express";
import { getDiagnoses } from "../services/diagnoseService";
const diagnoseRouter = require("express").Router();

diagnoseRouter.get("/", (_require: any, response: Response) => {
  response.status(200).send(getDiagnoses());
});

module.exports = diagnoseRouter;
