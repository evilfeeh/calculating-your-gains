import personData from "./person-data";

export default interface calculateClass {
  weightMultiplicator: number;
  heightMultiplicator: number;
  ageMultiplicator: number;
  kaloriesBase: number; 
  data: personData;
  factor: number;

  toKeep: (sexo: "male" | "female") => number;
  toLose: (sexo: "male" | "female") => number;
  toGain: (sexo: "male" | "female") => number;
}