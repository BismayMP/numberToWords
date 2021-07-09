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

export const validate = (number: string) => number && number.match('^[2-9]+$')

export const getWords = (number: string) => {
  let result: string[] = []
  for (const i of number) {
    const added = []
    const letters = NUMBERS[i]
    if (letters) {
      for (const letter of letters) {
        if (result.length) {
          for (let i = result.length - 1; i >= 0; i--) {
            added.push(result[i] + letter)
          }
        } else {
          added.push(letter)
        }
      }
    } else {
      added.push(...result)
    }
    result = added
  }
  return result
}
