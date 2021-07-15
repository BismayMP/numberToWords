import React from 'react'
import Options from '../../components/Options'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { OptionTypes } from '../../utils/types'

describe('testing options component', () => {
  let apiType = true
  let wordsFilter = true
  let realTimeFetch = true
  const handleSwitch = (type: OptionTypes) => {
    const { api, filter, realTime } = OptionTypes
    switch (type) {
      case api:
        apiType = !apiType
        break
      case filter:
        wordsFilter = !wordsFilter
        break
      case realTime:
        realTimeFetch = !realTimeFetch
        break
      default:
        break
    }
  }
  test('should match snapshoot', () => {
    const component = renderer.create(
      <Options handleSwitch={handleSwitch} apiType wordsFilter realTimeFetch />,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('components should chage state on click', () => {
    render(
      <Options
        handleSwitch={handleSwitch}
        apiType={apiType}
        wordsFilter={wordsFilter}
        realTimeFetch={realTimeFetch}
      />,
    )
    /** checking labels are rendered*/
    const options = screen.getAllByRole('checkbox')
    options.forEach((item) => {
      expect(item).toBeDefined()
      item.click()
      expect(item).toBeInTheDocument()
    })
    expect(apiType).toBeFalsy()
    expect(wordsFilter).toBeFalsy()
    expect(realTimeFetch).toBeFalsy()
  })

  test('handleChange should be called 3 times', () => {
    const handleChange = jest.fn((item) => null)
    render(
      <Options
        handleSwitch={handleChange}
        apiType={apiType}
        wordsFilter={wordsFilter}
        realTimeFetch={realTimeFetch}
      />,
    )
    /** checking labels are rendered*/
    const options = screen.getAllByRole('checkbox')
    options.forEach((item) => {
      expect(item).toBeDefined()
      item.click()
      expect(item).toBeInTheDocument()
    })
    expect(handleChange).toBeCalledTimes(3)
  })
})
