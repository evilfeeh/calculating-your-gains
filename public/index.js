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
      // const result = await this.$http.post(
      //   "http://localhost:3000/weight",
      //   {
      //     height: this.height,
      //     weight: this.weight,
      //     male: this.male,
      //     sex: this.sex,
      //     phisicalAcitivityLevel: this.phisicalAcitivityLevel,
      //   }
      // );

      const modal = new bootstrap.Modal(document.getElementById('resultado'), {
        keyboard: true
      })
      modal.show()
    }
  }
}).mount('#appWeight')