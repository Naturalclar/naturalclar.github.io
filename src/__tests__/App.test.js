import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

const wrapper = shallow(<App />)

it('renders without crashing', () => {
  expect(wrapper.length).toBe(1)
})

it('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
