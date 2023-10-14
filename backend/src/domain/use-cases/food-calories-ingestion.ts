import { foodCaloriesIngestion, meal } from '../interfaces/food-calories-ingestion';

export default class FoodCaloriesIngestion implements foodCaloriesIngestion {
  mealQuantity: number
  dailyCalories: number
  meals: meal[]
  getFoodCatalog(): void {

  }
  splitCalories(): void {
    
  }
  organizeMeals(): void {
    
  }
  sendMeals(): meal[] {
    return []
  }
}
