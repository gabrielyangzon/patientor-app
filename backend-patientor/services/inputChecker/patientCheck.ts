import { NewPatient } from "../../models/patient";

function checkPatientInput(body: unknown): NewPatient {
  const { name, dateOfBirth, ssn, gender, occupation } = body;

  const newPatient: NewPatient = {
    name: parseValue(name),
    dateOfBirth: parseDate(dateOfBirth),
    ssn: "",
    gender: "",
    occupation: parseValue(occupation),
  };

  return newPatient;
}

const parseValue = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing name");
  }

  return comment;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

export { checkPatientInput };
