const NUMBERS: any = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

export const errorMessages = {
  notValid: 'Input cannot contain only digits and no 0/1',
}

export const validate = (str: string): boolean =>
  Boolean(str && str.match('^[2-9]+$'))

export const getWords = (str: string): string[] => {
  let result: string[] = []
  try {
    str.split('').forEach((number: string) => {
      const newWords: string[] = []
      const letters: string = NUMBERS[number]
      if (letters) {
        for (const letter of letters) {
          if (result.length) {
            result.forEach((word: string) => {
              newWords.push(word + letter)
            })
          } else {
            newWords.push(letter)
          }
        }
      }
      result = newWords
    })
  } catch (error) {
    console.error(error)
  }

  return result
}
