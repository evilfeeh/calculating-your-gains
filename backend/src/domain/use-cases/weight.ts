import WeightClass from "../../ports/weight"
import personData from "../../ports/person-data"
import multiplicator from "../utils/multiplicators"

export default class Weight implements WeightClass {
  person: personData;
  weightMultiplicator: number;
  heightMultiplicator: number;
  ageMultiplicator: number;
  caloriesBase = 500; 
  factor: number;
  activityLevel: any;
  score: {
    weight: number;
    height: number;
    age: number;
  }
  
  main (req: any, res: any) {
    this.person = req.body
    this.calculateScore()
    const result = {
      'keep': this.toKeep(),
      'gain': this.toKeep() + this.caloriesBase,
      'lose': this.toKeep() - this.caloriesBase
    }
    res.status(200).send(result)
  }
  
  toKeep () {
    this.factor = multiplicator[this.person.sex].factor
    this.activityLevel = parseInt(this.person.phisicalAcitivityLevel)
    let scoreWithFactor = this.factor + this.score.weight + this.score.height + this.score.age
    return this.activityLevel + scoreWithFactor
  }
  
  calculateScore () {
    this.weightMultiplicator = multiplicator[this.person.sex].weight
    this.heightMultiplicator = multiplicator[this.person.sex].height
    this.ageMultiplicator = multiplicator[this.person.sex].age
    this.score = {
      weight: parseInt(this.person.weight) * this.weightMultiplicator,
      height: parseInt(this.person.height) * this.heightMultiplicator,
      age: parseInt(this.person.age) * this.ageMultiplicator
    }
  }
}