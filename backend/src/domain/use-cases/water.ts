import { waterClass } from '../../ports/water'

export default class Water implements waterClass {
  waterPerKg = 35
  factor = 750

  main (params: any) {
    const { weight, hoursOfExercise } = params
    return {
      'waterConsumption': this.calculateDailyQuantity(weight, hoursOfExercise)
    }
  }

  calculateDailyQuantity (weight: number, hoursOfExercise: number) {
    let result = ((weight * this.waterPerKg) + (this.factor * hoursOfExercise))
    return result
  }
}
