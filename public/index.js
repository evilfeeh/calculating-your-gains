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
      toGainCalories: ''
    }
  },
  methods: {
    async calculateWeight () {
      const request = await fetch("http://localhost:3000/weight", {
        method: "POST",
        body: {
          height: this.height,
          weight: this.weight,
          sex: this.sex,
          phisicalAcitivityLevel: this.phisicalAcitivityLevel,
        },
      });

      const modal = new bootstrap.Modal(document.getElementById('resultado'), {
        keyboard: true
      })
      modal.show()
    }
  }
}).mount('#appWeight')