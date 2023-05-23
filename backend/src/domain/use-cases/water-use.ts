import { waterClass } from '../interfaces/water'

export default class Water implements waterClass {
  weight: number
  waterPerKg: 35
  factor: number
  constructor (weight: number, factor: number) {
    this.weight = weight
    this.factor = factor
  }

  calculateDailyQuantity () {
    let result = (this.weight * (this.waterPerKg + this.factor))
    return result
  }
}