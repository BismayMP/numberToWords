import React from 'react'
import dotenv from 'dotenv'
import axios from 'axios'
import renderer from 'react-test-renderer'
import HomePage from '../../pages/Home/index'
import { render, screen, fireEvent } from '@testing-library/react'
dotenv.config()

jest.mock('axios')

describe('Home component', () => {
  test('should match snapshot', () => {
    const component = renderer.create(<HomePage />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Insert data and click generate', () => {
    render(<HomePage />)
    /** checking labels are rendered*/
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
    const btn = screen.getByText('Generate')
    expect(btn).toBeDefined()
    btn.click()
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_HOST}/api/23`,
    )
  })
})
