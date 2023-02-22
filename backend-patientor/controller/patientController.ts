import { Response } from "express";
import { checkPatientInput } from "../services/inputChecker/patientCheck";

import {
  addPatient,
  getAllPatientsWithoutSsn,
  getPatientById,
} from "../services/patientService";

const patientRouter = require("express").Router();

patientRouter.get("/", (_require: any, response: Response) => {
  response.status(200).send(getAllPatientsWithoutSsn());
});

patientRouter.get("/:id", (_require: any, response: Response) => {
  const id = _require.params.id;

  const pt = getPatientById(id);

  if (pt) {
    return response.status(200).send(pt);
  }

  return response.status(401).json({ message: "patient not found" });
});

patientRouter.post("/", (_require: any, response: Response) => {
  const body = _require.body;

  try {
    const checkedPatient = checkPatientInput(body);

    const addedPatient = addPatient(checkedPatient);

    if (addedPatient) {
      return response.status(201).json(addedPatient);
    }
  } catch (error: unknown) {
    return response.status(400).json({ message: "bad request" });
  }
});

module.exports = patientRouter;
