import Weight from '../../domain/use-cases/weight'
import Water from '../../domain/use-cases/water'
import Creatine from '../../domain/use-cases/creatine'
import UserAuth from '../../domain/utils/user-auth'
import express from 'express'
import cors from 'cors'

const app = express()
const water = new Water()
const weight = new Weight()
const creatine = new Creatine()

const userAuth = new UserAuth()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/v1/auth', ( req, res ) => { userAuth.auth(req, res)})

app.post('/weight', userAuth.validate, (req, res) => { weight.main(req, res) })
app.post('/water', userAuth.validate, (req, res) => { water.main(req, res) })
app.post('/creatine', userAuth.validate, (req, res) => { creatine.main(req, res) })

app.listen(process.env.PORT, () => {
  console.log(`listen http server on port: ${process.env.PORT}`)
})
