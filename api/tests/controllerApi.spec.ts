import { getWords, validate } from '../src/controllers/api'
import {
  mockedGetWordsResponseFor23,
  mockedGetWordsResponseFor234,
} from './__mocks__'

describe('getWords response expected to be defined getWords using 23 as aparameter', () => {
  test('getWords response expected to be defined using 23', () => {
    const words = getWords('23')
    expect(words).toBeDefined()
    expect(words).toEqual(mockedGetWordsResponseFor23)
  })
  test('getWords response expected to be defined using 234', () => {
    const words = getWords('234')
    expect(words).toBeDefined()
    expect(words).toEqual(mockedGetWordsResponseFor234)
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
