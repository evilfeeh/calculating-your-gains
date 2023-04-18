export interface meal {
  name: string;
  calories: number;
  portion: number;
  quantity: string;
  group: string;
}


export interface foodCaloriesIngestion {
  mealQuantity: number;
  dailyCalories: number;
  meals: meal[];
  getFoodCatalog(): void
  splitCalories(): void
  organizeMeals(): void
  sendMeals(): meal[]
}