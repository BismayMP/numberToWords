import React from 'react'
import renderer from 'react-test-renderer'
import HomePage from '../../pages/Home/index'

describe('Link changes the class when hovered', () => {
  test('should match snapshot', () => {
    const component = renderer.create(<HomePage />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  // manually trigger the callback
  /*tree.props.onMouseEnter()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseLeave()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()*/
})
