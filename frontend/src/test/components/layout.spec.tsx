import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Layout from '../../layouts'

describe('testing switch component', () => {
  test('should match snapshoot', () => {
    const component = renderer.create(
      <Layout>
        <h1>Layout test case</h1>
      </Layout>,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('layout render child components', () => {
    render(
      <Layout>
        <div>
          <h1>Layout test case using h1</h1>
          <h2>Layout test case using h2</h2>
          <h3>Layout test case using h3</h3>
        </div>
      </Layout>,
    )
    /** checking labels are rendered*/
    const h1 = screen.getByText(/h1/i)
    expect(h1).toBeInTheDocument()
    expect(h1.textContent).toBe('Layout test case using h1')

    const h2 = screen.getByText(/h2/i)
    expect(h2).toBeInTheDocument()
    expect(h2.textContent).toBe('Layout test case using h2')

    const h3 = screen.getByText(/h3/i)
    expect(h3).toBeInTheDocument()
    expect(h3.textContent).toBe('Layout test case using h3')
  })
})
