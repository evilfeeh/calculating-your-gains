const { createApp } = Vue

createApp({
  data() {
    return {
      height: '',
      weight: '',
      age: '',
      female: '',
      male: '',
      phisicalAcitivityLevel: '',
      toLoseCalories: '',
      toKeepCalories: '',
      toGainCalories: ''
    }
  },
  methods: {
    calculateWeight () {
      console.log(this)
    }
  }
}).mount('#appWeight')