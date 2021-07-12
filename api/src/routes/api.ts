import express from 'express'
import { validate, getWords, errorMessages } from '../controllers/api/index'

const router = express.Router()

/** Routes */
// GET

router.get('/:phoneNumber', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  if (validate(req?.params?.phoneNumber)) {
    try {
      const words = getWords(req.params.phoneNumber)
      res.status(200).json({ success: true, words })
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  } else {
    res.status(400).json({ success: false, error: errorMessages.notValid })
  }
})

export default router
