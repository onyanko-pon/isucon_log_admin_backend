import express from 'express'
import {Bench, Log} from '../db/models'

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
    if (log === null) {
      return res.status(404).json({message: `id=${logId}のlogは存在しません`})
    }
    res.json({ log })
  } catch (e) {
    res.status(500).json({message: e})
  }
})

router.get('/benches', async (req: express.Request, res: express.Response) => {
  try {
    const benches = await Bench.findAll()
    res.json({ benches })
  } catch (e) {
    res.status(500).json({message: e})
  }
})

router.get('/benches/:id', async (req: express.Request, res: express.Response) => {
  const benchId = req.params.id
  try {
    const bench = await Bench.findByPk(benchId)
    if (bench === null) {
      return res.status(404).json({message: `id=${benchId}のbenchは存在しません`})
    }
    // どのデータ取得するか調整
    res.json({ bench })
  } catch (e) {
    res.status(500).json({message: e})
  }
})

module.exports = router
