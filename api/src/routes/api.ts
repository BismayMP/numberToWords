import express from 'express'
import { validate, getWords, errorMessages } from '../controllers/api/index'

const router = express.Router()

/** Routes */
// GET

router.get('/:number', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  if (validate(req?.params?.number)) {
    const words = getWords(req.params.number)
    res.status(200).json({ success: true, words })
  } else {
    res.status(400).json({ success: false, error: errorMessages.notValid })
  }
})

export default router
