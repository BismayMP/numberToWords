import React, { ReactElement } from 'react'
import { Container } from 'react-bootstrap'

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default Layout
