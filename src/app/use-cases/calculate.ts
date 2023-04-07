import calculateClass from "../interfaces/calculateClass"
import personData from "../interfaces/personData"
import multiplicator from "../utils/multiplicators"

class Calculate implements calculateClass {
  data: personData
  weightMultiplicator: number
  heightMultiplicator: number;
  ageMultiplicator: number;
  kaloriesBase: 500; 
  factor: number;

  constructor(person: personData) {
      this.weightMultiplicator = multiplicator[person.sex].weight
      this.heightMultiplicator = multiplicator[person.sex].height
      this.ageMultiplicator = multiplicator[person.sex].age
      this.factor = multiplicator[person.sex].factor
  }

  keep () {
    
  }
  lose () {

  }
  gain () {

  }
}