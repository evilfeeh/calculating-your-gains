const { createApp } = Vue

createApp({
  data() {
    return {
      height: '',
      weight: '',
      age: '',
      female: '',
      male: '',
      sex: '',
      phisicalAcitivityLevel: '',
      toLoseCalories: '',
      toKeepCalories: '',
      toGainCalories: '',
      waterWeight: ''
    }
  },
  methods: {
    async calculateWeight () {
      const result = await this.makeRequest()

      this.toLoseCalories = result.lose
      this.toKeepCalories = result.keep
      this.toGainCalories = result.gain

      const modal = new bootstrap.Modal(document.getElementById('resultado'), {
        keyboard: true
      })
      modal.show()
    },
    async makeRequest() {
      const result = await fetch("http://localhost:3000/weight", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          height: this.height,
          weight: this.weight,
          sex: this.sex,
          age: this.age,
          phisicalAcitivityLevel: this.phisicalAcitivityLevel,
        }),
      });
      return result.json()
    }
  }
}).mount('#appWeight')