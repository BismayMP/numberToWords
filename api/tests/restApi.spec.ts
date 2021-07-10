import { errorMessages } from '../src/controllers/api'
import request from 'supertest'
import app from '../src/server'
import {
  mockedApiResponseSuccess,
  mockedApiResponseError,
  mockedGetWordsResponse,
} from './__mocks__'

describe('Rest GET endpoints', () => {
  test('fetch words using 123', async () => {
    const res = await request(app)
      .get('/api/123')
      .expect('Content-Type', /json/)
      .expect(400)
    expect(res.body).toBeInstanceOf(Object)
    expect(res.body.success).toBeFalsy()
    expect(res.body?.error).toBeDefined()
    expect(res.body?.error).toEqual(errorMessages.notValid)
    expect(res.body).toEqual(mockedApiResponseError)
  })

  /** Success Response */
  test('fetch words using 23', async () => {
    const res = await request(app)
      .get('/api/23')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(res.body).toBeInstanceOf(Object)
    expect(res.body.success).toBeTruthy()
    expect(res.body?.words).toBeDefined()
    expect(res.body?.words?.length).toBeGreaterThan(1)
    expect(res.body?.words).toEqual(mockedGetWordsResponse)
    expect(res.body).toEqual(mockedApiResponseSuccess)
  })
})
