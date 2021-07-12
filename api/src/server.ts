import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import expressPlayground from 'graphql-playground-middleware-express'
import dotenv from 'dotenv'
import resolver from './graphql/resolver'
import schema from './graphql/schema'
import router from './routes/api'
import cors from 'cors'

// Constants Declarations

dotenv.config()
const app = express()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
  }),
)

app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.use('/api', router)

export default app
