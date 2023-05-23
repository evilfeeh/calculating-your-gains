export interface waterClass {
  weight: number;
  waterPerKg: number;
  factor: number;
  calculateDailyQuantity: () => number;
} 