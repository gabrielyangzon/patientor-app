import { NewPatient, Patient, PatientsWithoutSsn } from "../models/patient";
import patient from "../data/patients";

import { generateUid } from "../util/util";

const getAllPatients = (): Patient[] => {
  return patient;
};

const getAllPatientsWithoutSsn = (): PatientsWithoutSsn[] => {
  return patient.map((pt) => ({
    id: pt.id,
    name: pt.name,
    dateOfBirth: pt.dateOfBirth,
    gender: pt.gender,
    occupation: pt.occupation,
  }));
};

const getPatientById = (id: string): Patient | null => {
  const patientFound = patient.find((x) => x.id === id);

  return patientFound ? patientFound : null;
};

const addPatient = (entry: NewPatient): Patient | null => {
  const newPatient: Patient = {
    id: generateUid(),
    ...entry,
  };

  patient.push(newPatient);

  return newPatient;
};

export { getAllPatients, getAllPatientsWithoutSsn, getPatientById, addPatient };
