import { creatine } from '../interfaces/creatine'

export default class Creatine implements creatine {
  loadingPhase = 0.3
  maintainancePhase= 0.1
  calculate(kilograms: number) {
    return {
      loadingPhase: kilograms * this.loadingPhase,
      maintainancePhase: kilograms * this.maintainancePhase
    }
  }
}