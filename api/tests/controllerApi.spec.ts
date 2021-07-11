import { getWords, validate } from '../src/controllers/api'
import { mockedGetWordsResponse } from './__mocks__'

describe('getWords using 23 as aparameter', () => {
  test('getWords response expected to be defined', () => {
    const words = getWords('23')
    expect(words).toBeDefined()
    expect(words).toEqual(mockedGetWordsResponse)
  })
  test('getWords response expected to be defined using 98765432', () => {
    const words = getWords('98765432')
    expect(words).toBeDefined()
    expect(words.length).toBeGreaterThan(100)
  })
  test('getWords response expected to be defined using 2', () => {
    const words = getWords('2')
    expect(words).toBeDefined()
    expect(words.length).toBeGreaterThanOrEqual(3)
    expect(words).toEqual(['a', 'b', 'c'])
  })
  test('getWords response expected to be defined but empty', () => {
    const words = getWords('1')
    expect(words).toBeDefined()
    expect(words.length).toEqual(0)
  })
})

describe('validate funtion test', () => {
  test('using 12 should be invalid, response should be false', () => {
    const res = validate('12')
    expect(res).toBeDefined()
    expect(res).toBeFalsy()
  })
  test('using 23 should be valid, response should be true', () => {
    const res = validate('23')
    expect(res).toBeDefined()
    expect(res).toBeTruthy()
  })
  test('using 9846583 should be valid, response should be true', () => {
    const res = validate('9846583')
    expect(res).toBeDefined()
    expect(res).toBeTruthy()
  })
  test('using 2 should be valid, response should be true', () => {
    const res = validate('2')
    expect(res).toBeDefined()
    expect(res).toBeTruthy()
  })
})
