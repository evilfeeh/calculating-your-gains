import { creatine } from '../../ports/creatine'

export default class Creatine implements creatine {
  loadingPhase = 0.3
  maintainancePhase= 0.1
  kilograms: number

  main (params: any) {
    const { weight } = params
    return {
      loadingPhase: weight * this.loadingPhase,
      maintainancePhase: weight * this.maintainancePhase
    };
  }
}
