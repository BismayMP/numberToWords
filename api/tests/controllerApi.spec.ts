import { getWords } from '../src/controllers/api'
import { getWordsResponse } from './mocks/__mocks'

describe('getWords using 23 as aparameter', () => {
  let words: string[] = []
  beforeAll(() => {
    words = getWords('23')
  })

  test('getWords response expected to be defined', () => {
    expect(words).toBeDefined()
  })
  test('getWords response expected to be defined', () => {
    expect(words).toEqual(getWordsResponse)
  })
})
