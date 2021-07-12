import { getWords, errorMessages } from '../controllers/api/index'
import { GetWordsResponse } from '../utils/types'

type getWordsParam = {
  phoneNumber: string
}

export default {
  // Query
  getWords: ({ phoneNumber }: getWordsParam): GetWordsResponse => {
    const words = getWords(phoneNumber)
    return words.length > 0
      ? { success: true, words }
      : { success: false, error: errorMessages.notValid }
  },
}
