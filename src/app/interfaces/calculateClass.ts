import personData from "./personData";

export default interface calculateClass {
  weightMultiplicator: number;
  heightMultiplicator: number;
  ageMultiplicator: number;
  kaloriesBase: number; 
  data: personData;
  factor: number;

  keep: (sexo: "male" | "female") => number;
  lose: (sexo: "male" | "female") => number;
  gain: (sexo: "male" | "female") => number;
}