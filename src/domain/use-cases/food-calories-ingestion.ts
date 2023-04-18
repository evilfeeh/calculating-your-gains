import { foodCaloriesIngestion, meal } from '../interfaces/food-calories-ingestion';

export default class FoodCaloriesIngestion implements foodCaloriesIngestion {
  mealQuantity: number
  dailyCalories: number
  meals: meal[]
  getFoodCatalog(): void {
    throw new Error('Method not implemented.')
  }
  splitCalories(): void {
    throw new Error('Method not implemented.')
  }
  organizeMeals(): void {
    throw new Error('Method not implemented.')
  }
  sendMeals(): meal[] {
    throw new Error('Method not implemented.')
  }
}