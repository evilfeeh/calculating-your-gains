import phisicalActivityLevel from "../utils/phisical-activity-level"
import WeightClass from "../interfaces/weight"
import personData from "../interfaces/person-data"
import multiplicator from "../utils/multiplicators"

export default class Weight implements WeightClass {
  person: personData
  weightMultiplicator: number
  heightMultiplicator: number;
  ageMultiplicator: number;
  caloriesBase: 500; 
  factor: number;
  activityLevel: any;
  score: {
    weight: number;
    height: number;
    age: number;
  }

  constructor(person: personData) {
    this.person = person
    this.activityLevel = person.phisicalAcitivityLevel
    this.weightMultiplicator = multiplicator[person.sex].weight
    this.heightMultiplicator = multiplicator[person.sex].height
    this.ageMultiplicator = multiplicator[person.sex].age
    this.factor = multiplicator[person.sex].factor
    this._calculateScore()
  }

  toKeep () {
    let scoreWithFactor = this.factor + this.score.weight + this.score.height + this.score.age
    return phisicalActivityLevel[this.activityLevel as keyof {}] + scoreWithFactor
  }

  toLose () {
    return this.toKeep() - this.caloriesBase
  }

  toGain () {
    return this.toKeep() + this.caloriesBase
  }

  _calculateScore () {
    this.score = {
      weight: this.person.weight * this.weightMultiplicator,
      height: this.person.height * this.heightMultiplicator,
      age: this.person.age * this.ageMultiplicator
    }
  }
}