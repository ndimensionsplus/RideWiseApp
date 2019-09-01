/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Home, WhereTo, Settings } from '../src/containers';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("App Test Cases", () => {

  const nav = {
    navigate: jest.fn(),
    openDrawer: jest.fn(),
    goBack: jest.fn()
  };

  it('Home Page Renders Correctly', () => {
    const tree = renderer.create(<Home navigation={nav} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Where To Page Renders Correctly', () => {
    const tree = renderer.create(<WhereTo navigation={nav} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Settings Page Renders Correctly', () => {
    const tree = renderer.create(<Settings navigation={nav} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
