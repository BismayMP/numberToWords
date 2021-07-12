import React, { ReactElement } from 'react'
import { Container } from 'react-bootstrap'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

type Props = {
  children: ReactElement
}

const api = process.env.REACT_APP_API_HOST

const client = new ApolloClient({
  uri: `${api}/graphql`,
  cache: new InMemoryCache(),
})

const Layout = ({ children }: Props) => {
  return (
    <ApolloProvider client={client}>
      <Container>{children}</Container>
    </ApolloProvider>
  )
}

export default Layout
