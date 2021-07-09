import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import dotenv from 'dotenv'
import resolver from './src/graphql/resolver'
import schema from './src/graphql/schema'
import router from './src/routes/api'

// Constants Declarations

dotenv.config()
const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
  }),
)

app.use('/api', router)

export default app
