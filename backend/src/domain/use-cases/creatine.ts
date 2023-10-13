import { creatine } from '../interfaces/creatine'

export default class Creatine implements creatine {
  loadingPhase = 0.3
  maintainancePhase= 0.1
  kilograms: number
  constructor(kilograms: number) {
    this.kilograms = kilograms
  }
  calculate() {
    return {
      loadingPhase: this.kilograms * this.loadingPhase,
      maintainancePhase: this.kilograms * this.maintainancePhase
    }
  }
}