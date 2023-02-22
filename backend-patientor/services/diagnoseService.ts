import diagnoses from "../data/diagnoses";
import { Diagnose, NonSensitiveDiagnose } from "../models/diagnose";

const getDiagnoses = (): Diagnose[] => {
  return diagnoses;
};

const getNonsensitiveDiagnoses = (): NonSensitiveDiagnose[] => {
  return diagnoses;
};
const addDiagnose = () => {
  return "";
};

export { getDiagnoses, getNonsensitiveDiagnoses, addDiagnose };
