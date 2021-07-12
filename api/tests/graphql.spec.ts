import { errorMessages } from '../src/controllers/api'
import request from 'supertest'
import app from '../src/server'
import {
  mockedGraphqlGetWordsResponseError,
  mockedGraphqlGetWordsResponseSuccessFor23,
  mockedGraphqlGetWordsResponseSuccessFor234,
  mockedGetWordsResponseFor23,
  mockedGetWordsResponseFor234,
} from './__mocks__'

describe('Graphql endpoints', () => {
  /** Error request*/
  it('fetch words using 12', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `{  
            getWords(number: "12"){ 
                success
                words
                error
            }
        }`,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(res.body).toBeInstanceOf(Object)
    expect(res.body.data?.getWords?.success).toBeFalsy()
    expect(res.body.data?.getWords?.error).toBeDefined()
    expect(res.body.data?.getWords?.words).toEqual(null)
    expect(res.body.data?.getWords?.error).toEqual(errorMessages.notValid)
    expect(res.body.data?.getWords).toEqual(mockedGraphqlGetWordsResponseError)
  })

  /** Success Response */
  it('fetch words using 23', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `{  
            getWords(number: "23"){ 
                success
                words
                error
            }
        }`,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(res.body).toBeInstanceOf(Object)
    expect(res.body.data?.getWords?.success).toBeTruthy()
    expect(res.body.data?.getWords?.words).toBeDefined()
    expect(res.body.data?.getWords?.error).toEqual(null)
    expect(res.body.data?.getWords?.words?.length).toBeGreaterThan(1)
    expect(res.body.data?.getWords?.words).toEqual(mockedGetWordsResponseFor23)
    expect(res.body.data?.getWords).toEqual(
      mockedGraphqlGetWordsResponseSuccessFor23,
    )
  })

  test('fetch words using 234', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `{  
            getWords(number: "234"){ 
                success
                words
                error
            }
        }`,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(res.body.data?.getWords?.success).toBeTruthy()
    expect(res.body.data?.getWords?.words).toBeDefined()
    expect(res.body.data?.getWords?.error).toEqual(null)
    expect(res.body.data?.getWords?.words?.length).toBeGreaterThan(1)
    expect(res.body.data?.getWords?.words).toEqual(mockedGetWordsResponseFor234)
    expect(res.body.data?.getWords).toEqual(
      mockedGraphqlGetWordsResponseSuccessFor234,
    )
  })
  test('fetch words using 2', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `{  
            getWords(number: "2"){ 
                success
                words
                error
            }
        }`,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(res.body.data?.getWords?.success).toBeTruthy()
    expect(res.body.data?.getWords?.words).toBeDefined()
    expect(res.body.data?.getWords?.error).toEqual(null)
    expect(res.body.data?.getWords?.words?.length).toBeGreaterThanOrEqual(3)
    expect(res.body.data?.getWords?.words).toEqual(['a', 'b', 'c'])
  })

  test('fetch words using 23456789', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `{  
            getWords(number: "23456789"){ 
                success
                words
                error
            }
        }`,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(res.body.data?.getWords?.success).toBeTruthy()
    expect(res.body.data?.getWords?.words).toBeDefined()
    expect(res.body.data?.getWords?.error).toEqual(null)
    expect(res.body.data?.getWords?.words?.length).toBeGreaterThan(300)
  })
})
