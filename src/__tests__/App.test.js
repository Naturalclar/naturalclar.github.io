import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { Header, Footer } from '../components';

const wrapper = shallow(<App/>);

it('renders without crashing', () => {
  expect(wrapper.length).toBe(1);
});

it('has child components', () => {
  expect(wrapper.find(Header).length).toBe(1);
  expect(wrapper.find(Footer).length).toBe(1);
})