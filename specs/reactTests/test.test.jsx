import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../../src/client/app/test.jsx';

describe('Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Test />, div);
  })
})