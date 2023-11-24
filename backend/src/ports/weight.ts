import personData from "./person-data";

interface score {
  weight: number;
  height: number;
  age: number;
}

export default interface calculateClass {
  weightMultiplicator: number;
  heightMultiplicator: number;
  ageMultiplicator: number;
  caloriesBase: number; 
  person: personData;
  factor: number;
  activityLevel: number;
  score: score;

  toKeep: () => number;
  calculateScore(): void
  main: (params: any) => any
}