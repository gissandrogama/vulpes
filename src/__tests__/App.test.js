import React from 'react'
import { shallow } from 'enzyme'
// import renderer from 'react-test-renderer';
import App from '../App'

describe('Testing App component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.html()).toMatchSnapshot();
  });
});