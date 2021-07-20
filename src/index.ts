if (process.env.NODE_ENV !== "production") {
  const dotenv = require('dotenv')
  dotenv.config()
}

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

app.listen(PORT, () => {
  console.log(`Start on port ${PORT}`)
})