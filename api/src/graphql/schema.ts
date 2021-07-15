import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Words {
    success: Boolean
    words: [String]
    error: String
  }
  type Query {
    getWords(phoneNumber: String) : Words
  }
`)

export default schema
