import { getWords, validate, errorMessages } from '../controllers/api/index'

type ParamType = {
  number: string;
};

export default {
  // Queries

  getWords: async ({ number }: ParamType) => {
    if (validate(number)) {
      const words = getWords(number)
      return { success: true, words }
    }
    return { success: false, error: errorMessages.notValid }
  },
}
