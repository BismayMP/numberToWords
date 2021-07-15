import React from 'react'
import Keyboard from '../../components/Keyboard'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('Keyboard component', () => {
  const handleOnClick = jest.fn()
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']
  test('should match snapshoot', () => {
    const component = renderer.create(<Keyboard handleClick={handleOnClick} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('components should chage state on click', () => {
    render(<Keyboard handleClick={handleOnClick} />)
    /** checking labels are rendered*/
    const buttons = screen.getAllByRole('button')
    buttons.forEach((item, index) => {
      expect(item).toBeDefined()
      expect(item).toBeInTheDocument()
      item.click()
      expect(item.textContent).toBe(numbers[index])
    })
    expect(handleOnClick).toBeCalledTimes(12)
  })
})
