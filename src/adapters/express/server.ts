import Weight from '../../domain/use-cases/weight'
import Water from '../../domain/use-cases/water-use'
import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/weight', (req: Request, res: Response) => {
  const personData = req.body
  const weight = new Weight(personData)
  const result = {
    'keep': weight.toKeep(),
    'gain': weight.toGain(),
    'lose': weight.toLose()
  }
  res.status(200).send(result)
})

app.post('/water', (req: Request, res: Response) => {
  const { weight, factor } = req.body
  const water = new Water(weight, factor)
  const result = {
    'waterConsumption': water.calculateDailyQuantity()
  }

  res.status(200).send(result)
})

app.listen(process.env.PORT, () => {
  console.log(`listen http server on port: ${process.env.PORT}`)
})