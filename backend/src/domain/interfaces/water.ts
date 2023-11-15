export interface waterClass {
  waterPerKg: number;
  calculateDailyQuantity: (weight: number, factor: number) => number;
  main: (req: any, res: any) => any
} 