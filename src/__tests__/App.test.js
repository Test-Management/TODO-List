import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { qase } from 'jest-qase-reporter/dist/jest';
import {within} from '@testing-library/dom'
import App from '../App';

const testData = [{
  "id": 1,
  "task": "give dog a bath",
  "complete": true
}, {
  "id": 2,
  "task": "Vacuum floor",
  "complete": false
}];

// Add TODO
test('Add TODO', () => {
    const { getByTestId, queryByText } = render(<App initialData={testData}/>);

    const input = getByTestId('add-input');
    const todoText = 'thing to do';
    fireEvent.change(input, {target: {value: todoText}});

    const button = getByTestId('add-button');
    const list = getByTestId('list');
    fireEvent.click(button);

    expect(within(list).queryByText(todoText)).not.toBeNull();
});

// Check TODO 

// Uncheck TODO

// Delete TODO

// Ordered TODOs
