import React from 'react'
import Switch from '../../components/Switch'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('testing switch component', () => {
  let state = false
  const setState = () => (state = !state)
  test('should match snapshoot', () => {
    const component = renderer.create(
      <Switch handleSwitch={() => setState()} value={state} />,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('passing all the optional parameters should render personalized label around the switch', () => {
    render(
      <Switch
        handleSwitch={() => setState()}
        value={state}
        labelStart="start"
        labelEnd="end"
      />,
    )
    /** checking labels are rendered*/
    const labelStart = screen.getByText(/start/i)
    const labelEnd = screen.getByText(/end/i)
    expect(labelStart).toBeInTheDocument()
    expect(labelEnd).toBeInTheDocument()
  })

  test('the switch should change the value when clicked', () => {
    render(
      <Switch
        handleSwitch={() => setState()}
        value={state}
        labelStart="start"
        labelEnd="end"
      />,
    )
    /** checking labels are rendered*/
    const input = screen.queryByRole('checkbox')
    expect(input).toBeInTheDocument()
    const currentValue = state
    input?.click()
    expect(currentValue).toBe(!state)
  })

  test('passing no optional parameters should render on off as labels', () => {
    render(<Switch handleSwitch={() => setState()} value={state} />)
    /** checking labels are rendered*/
    const labelStart = screen.getByText(/off/i)
    const labelEnd = screen.getByText(/on/i)
    expect(labelStart).toBeInTheDocument()
    expect(labelEnd).toBeInTheDocument()
  })
})
