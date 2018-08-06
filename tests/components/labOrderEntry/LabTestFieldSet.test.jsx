import React from 'react';
import LabTestFieldSet from '../../../app/js/components/labOrderEntry/LabTestFieldSet';

let props;
let mountedComponent;
props = {
  handleTestSelection: jest.fn(),
  selectedTests: [
    { uuid: 'asampleduuid1-234', display: 'sampleA' },
    { uuid: 'defmpleduuid1-566', display: 'sampleB' },
  ],
  tests: [
    { uuid: 'asampleduuid1-234', display: 'sampleA' },
    { uuid: 'defmpleduuid1-566', display: 'sampleB' },
    { uuid: '5sampleduuid2-788', display: 'sampleC' }
  ]
};

const getComponent = () => {
  if (!mountedComponent) {
    mountedComponent = shallow(<LabTestFieldSet { ...props } />);
  }
  return mountedComponent;
};

describe('Component: LabTestFieldSet', () => {
  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('should mount initially', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  it('should support click for each button rendered', () => {
    const component = getComponent();
    const handleTestSelection = jest.spyOn(props, 'handleTestSelection');
    const testButton = component.find('#category-test-button').at(0); // click the second button
    testButton.simulate('click', {});
    expect(handleTestSelection).toBeCalled();
    expect(component).toMatchSnapshot();
  });

  it('should add a class of `active` to the selected test', () => {
    const component = getComponent();
    expect(component.find('.lab-tests-btn.active').length).toEqual(2); // 2 tests are in the selectedTests array
  })
});
