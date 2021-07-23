if (process.env.NODE_ENV !== "production") {
  const dotenv = require('dotenv')
  dotenv.config()
}

import {Log} from './db/models'
import express from 'express'
const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT ?? 3000
const router = require('./api/api')

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*");
  next();
})

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Start on port ${PORT}`)
})