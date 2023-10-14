import Weight from '../../domain/use-cases/weight'
import Water from '../../domain/use-cases/water'
import Creatine from '../../domain/use-cases/creatine'
import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const water = new Water()
const weight = new Weight()
const creatine = new Creatine()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/weight', weight.main)
app.post('/water', water.main)
app.post('/creatine', creatine.main)

app.listen(process.env.PORT, () => {
  console.log(`listen http server on port: ${process.env.PORT}`)
})