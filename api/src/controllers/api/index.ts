const NUMBERS: string[] = [
  '',
  '',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz',
]

export const errorMessages = {
  notValid: 'No valid input, you can only use digits expect 0 and 1',
}

export const validate = (str: string): boolean =>
  Boolean(str && str.match('^[2-9]+$'))

const formWords = (
  number: number[],
  current: number,
  currentWordLetters: string[],
  n: number,
  words: string[],
) => {
  if (current === n) {
    words.push(currentWordLetters.join(''))
    return
  }
  const letters = NUMBERS[number[current]].split('')
  for (const letter of letters) {
    currentWordLetters.push(letter)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formWords(number, current + 1, currentWordLetters, n, words)
    currentWordLetters.pop()
    if (number[current] == 0 || number[current] == 1) {
      return
    }
  }
}

export const getWords = (str: string): string[] => {
  const result: string[] = []
  const currentWordLetters: string[] = []
  try {
    const number = str.split('').map((item: string) => parseInt(item))
    formWords(number, 0, currentWordLetters, number.length, result)
  } catch (error) {
    console.error(error)
  }

  return result
}
