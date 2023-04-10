import express from 'express'
import Calculate from '../../domain/use-cases/calculate'

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))


app.post('/calculate', (req, res) => {
  const { personData } = req.body
  const calculate = new Calculate(personData)

  const result = {
    'keep': calculate.toKeep(),
    'gain': calculate.toGain(),
    'lose': calculate.toLose()
  }

  res.status(200).send(result)
})

app.listen(process.env.PORT, () => {
  console.log(`listen http server on port: ${process.env.PORT}`)
})