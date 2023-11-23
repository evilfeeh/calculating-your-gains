export interface waterClass {
  waterPerKg: number;
  calculateDailyQuantity: (weight: number, factor: number) => number;
  main: (params: any) => any
} 