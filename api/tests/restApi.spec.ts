import { errorMessages } from '../src/controllers/api'
import request from 'supertest'
import app from '../src/server'
import {
  mockedApiResponseSuccessFor23,
  mockedApiResponseSuccessFor234,
  mockedApiResponseError,
  mockedGetWordsResponseFor23,
  mockedGetWordsResponseFor234,
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
    expect(res.body?.words).toEqual(mockedGetWordsResponseFor23)
    expect(res.body).toEqual(mockedApiResponseSuccessFor23)
  })

  test('fetch words using 234', async () => {
    const res = await request(app)
      .get('/api/234')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(res.body).toBeInstanceOf(Object)
    expect(res.body.success).toBeTruthy()
    expect(res.body?.words).toBeDefined()
    expect(res.body?.words?.length).toBeGreaterThan(1)
    expect(res.body?.words).toEqual(mockedGetWordsResponseFor234)
    expect(res.body).toEqual(mockedApiResponseSuccessFor234)
  })
  test('fetch words using 2', async () => {
    const res = await request(app)
      .get('/api/2')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(res.body).toBeInstanceOf(Object)
    expect(res.body.success).toBeTruthy()
    expect(res.body?.words).toBeDefined()
    expect(res.body?.words?.length).toBeGreaterThanOrEqual(3)
    expect(res.body?.words).toEqual(['a', 'b', 'c'])
  })
})
