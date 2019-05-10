import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CheckboxWithLabel from '../checkbox_with_label';

configure({ adapter: new Adapter() });

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  // TODO:
  // expect: label Off is visible
  expect(checkbox.text()).toBe('Off');
  // action: user clicks
  checkbox.find('input').simulate('change');
  // expect: label On is visible
  expect(checkbox.text()).toBe('On');
  // action: user clicks
  checkbox.find('input').simulate('change');
  // expect: label Off is visible
  expect(checkbox.text()).toBe('Off');
});
