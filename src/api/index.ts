import express from 'express'
import {Log} from '../db/models'

const router = express.Router()

router.get('/logs', async (req: express.Request, res: express.Response) => {
  try {
    const logs = await Log.findAll()
    res.json({ logs })
  } catch (e) {
    res.status(500).json({message: e})
  }
})

router.get('/logs/:id', async (req: express.Request, res: express.Response) => {
  const logId = req.params.id
  try {
    const log = await Log.findByPk(logId)
    if (log === null) return res.status(404).json(`id=${logId}のlogは存在しません`)
    res.json({ log })
  } catch (e) {
    res.status(500).json({message: e})
  }
})

module.exports = router
