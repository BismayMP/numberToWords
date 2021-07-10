import { getWords, validate } from '../src/controllers/api'
import { getWordsResponse } from './__mocks__'

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

describe('validate funtion test', () => {
  test('using 12 should be invalid, response should be false', () => {
    const res = validate('12')
    expect(res).toBeDefined()
    expect(res).toBeFalsy()
  })
  test('using 12 should be valid, response should be true', () => {
    const res = validate('23')
    expect(res).toBeDefined()
    expect(res).toBeTruthy()
  })
})
