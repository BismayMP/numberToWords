import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import dotenv from 'dotenv'
import resolver from './src/graphql/resolver'
import schema from './src/graphql/schema'
import router from './src/routes/api'

// Constants Declarations

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

// The root provides a resolver function for each API endpoint

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
  }),
)

app.use('/api', router)

app.listen(PORT)
console.log(`Running a GraphQL API 🚀 Server on port ${PORT}`)
