import express from 'express'
import { getWords, errorMessages } from '../controllers/api/index'

const router = express.Router()

/** Routes */
// GET

router.get('/:phoneNumber', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    const words = getWords(req.params.phoneNumber)
    if (words.length) {
      res.status(200).json({ success: true, words })
    } else {
      res.status(400).json({ success: false, error: errorMessages.notValid })
    }
  } catch (error) {
    console.error(error)
    res.status(500)
  }
})

export default router
