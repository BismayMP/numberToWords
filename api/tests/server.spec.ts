import { errorMessages } from '../src/controllers/api'
import request from 'supertest'
import app from '../server'
import { apiResponseSuccess, apiResponseError } from './__mocks__'

describe('Rest GET Endpoints', () => {
  let errorRes: any = {}
  let successRes: any = {}

  beforeAll(async () => {
    errorRes = await request(app).get('/api/123')
    successRes = await request(app).get('/api/23')
  })

  /** Error request */
  it('Status code should be 400', () => {
    expect(errorRes.statusCode).toEqual(400)
  })

  it('should contain an error message', () => {
    expect(errorRes.body).toHaveProperty('success')
    expect(errorRes.body).toHaveProperty('error')
    expect(errorRes.body.error).toEqual(errorMessages.notValid)
  })
  it('response should match mocked Error response', () => {
    expect(errorRes.body).toEqual(apiResponseError)
  })

  /** Success Response*/
  it('Status code should be 200', () => {
    expect(successRes.statusCode).toEqual(200)
  })

  it('should contain a words array', () => {
    expect(successRes.body).toHaveProperty('words')
    expect(successRes.body.words).toHaveLength(9)
    expect(successRes.body.words).toEqual([
      'ad',
      'bd',
      'cd',
      'ae',
      'be',
      'ce',
      'af',
      'bf',
      'cf',
    ])
  })
  it('response should match mocked success response', () => {
    expect(successRes.body).toEqual(apiResponseSuccess)
  })
})
