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
  toLose: () => number;
  toGain: () => number;
  _calculateScore(): void
  main: (req: any, res: any) => any
}