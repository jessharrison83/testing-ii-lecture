import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import renderer from 'react-test-renderer';


// describe('<App />', () => {
//   it('matches snapshot', () => {
//     const tree = renderer.create(<App />).toJSON();

//     expect(tree).toMatchSnapshot();
//   })
// })

it('renders without crashing', () => {
  shallow( <App />);
});

it('renders the display', () => {
  const wrapper = shallow(<App />);
  const elements = wrapper.find('h1.display')

  expect(elements.length).toBe(1);
})

it('should be "off" by default', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  expect(instance.state.isOn).toBe(false);
})


it('should have a toggle button', () => {
  const wrapper = shallow(<App />);
  const element = wrapper.find('button.toggle');

  expect(element.length).toBe(1);
})

describe('toggle button', () => {

  it('should toggle state on click', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    const button = wrapper.find('button.toggle');

    button.simulate('click');
    expect(instance.state.isOn).toBe(true);

    button.simulate('click');
    expect(instance.state.isOn).toBe(false);
  })
})

it('should display the state of the switch', () => {
  const wrapper = shallow(<App />);
  const display = wrapper.find('h1.display');

  expect(display.text()).toBe('Off');
})

/*
- does it render?
- does it render the right UI? React renders data into UI. We need to be sure our code is accurate to our intention

- check/access/change state
- check/access/change props
- fire events

Specs for our On/Off button
- should be "off" by default
- should have a toggle button
- clicking the toggle button should toggle the switch
- should display the correct state (on/off) of the switch


*/