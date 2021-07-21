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

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*");
  next();
})

// TODO 消す
app.get('/hello', (req: express.Request, res: express.Response) => {
  res.json({
    message: "hello"
  })
})

// TODO /api以下を別ファイルに分ける
// TODO /api/logs/:id

app.get('/api/logs', async (req: express.Request, res: express.Response) => {
  try {
    const logs = await Log.findAll();
    res.json({ logs })
  } catch (e) {
    console.log({ e })
    res.status(500).json({message: e})
  }
})

app.listen(PORT, () => {
  console.log(`Start on port ${PORT}`)
})