import { waterClass } from '../ports/water'

export default class Water implements waterClass {
  waterPerKg = 35
  factor = 750

  main (req: any, res: any) {
    const { weight, hoursOfExercise } = req.body
    console.log(weight, hoursOfExercise)
    const result = {
      'waterConsumption': this.calculateDailyQuantity(weight, hoursOfExercise)
    }
    res.status(200).send(result)
  }

  calculateDailyQuantity (weight: number, hoursOfExercise: number) {
    let result = ((weight * this.waterPerKg) + (this.factor * hoursOfExercise))
    return result
  }
}
