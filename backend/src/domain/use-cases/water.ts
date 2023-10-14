import { waterClass } from '../interfaces/water'

export default class Water implements waterClass {
  weight: number
  waterPerKg: 0.35
  factor: number

  main (req: any, res: any) {
    const { weight, factor } = req.body
    const result = {
      'waterConsumption': this.calculateDailyQuantity(weight, factor)
    }
    res.status(200).send(result)
  }

  calculateDailyQuantity (weight: number, factor: number) {
    let result = (weight * (this.waterPerKg + factor))
    return result
  }
}
