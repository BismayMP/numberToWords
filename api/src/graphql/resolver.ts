import { getWords, validate, errorMessages } from '../controllers/api/index'
import { GetWordsResponse } from '../utils/types'

type ParamType = {
  number: string
}

export default {
  // Querie
  getWords: ({ number }: ParamType): GetWordsResponse => {
    if (validate(number)) {
      const words = getWords(number)
      return { success: true, words }
    }
    return { success: false, error: errorMessages.notValid }
  },
}
