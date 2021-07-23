import express from 'express'
import {Log} from '../db/models'

const router = express.Router()

router.get('/logs', async (req: express.Request, res: express.Response) => {
  try {
    const logs = await Log.findAll()
    res.json({ logs })
  } catch (e) {
    console.log({ e })
    res.status(500).json({message: e})
  }
})

router.get('/logs/:id', async (req: express.Request, res: express.Response) => {
  const log_id = req.params.id
  try {
    const log = await Log.findByPk(log_id)
    res.json({ log })
  } catch (e) {
    console.log({ e })
    res.status(500).json({message: e})
  }
})

module.exports = router
