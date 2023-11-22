import { creatine } from '../ports/creatine'

export default class Creatine implements creatine {
  loadingPhase = 0.3
  maintainancePhase= 0.1
  kilograms: number

  main (req: any, res: any) {
    const { weight } = req.body
    const result = {
      loadingPhase: weight * this.loadingPhase,
      maintainancePhase: weight * this.maintainancePhase
    };
    res.status(200).send(result)
  }
}
