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
test(qase([1], 'Add TODO'), () => {
    const { getByTestId, queryByText } = render(<App initialData={testData}/>);

    const input = getByTestId('add-input');
    const todoText = 'thing to do';
    fireEvent.change(input, {target: {value: todoText}});

    const button = getByTestId('add-button');
    const list = getByTestId('list');
    fireEvent.click(button);

    expect(within(list).queryByText(todoText)).not.toBeNull();
});

// Check
test(qase([2], 'Check TODO'), () => {
  const { getByTestId, queryByText } = render(<App initialData={testData}/>);

  const list = getByTestId('list');
  let element = within(list).getByText('Vacuum floor');
  fireEvent.click(element);

  element = within(list).getByText('Vacuum floor');
  expect(element.className).toEqual('todo strike');
});

// Uncheck
test(qase([3], 'Uncheck TODO'), () => {
  const { getByTestId, queryByText } = render(<App initialData={testData}/>);

  const list = getByTestId('list');
  let element = within(list).getByText('give dog a bath');
  fireEvent.click(element);

  element = within(list).getByText('give dog a bath');
  expect(element.className).toEqual('todo');
});

// Delete
test(qase([4], 'Delete TODO'), () => {
  const { getByTestId, queryByText } = render(<App initialData={testData}/>);

  const button = getByTestId('todo-1-del-btn');
  fireEvent.click(button);

  const list = getByTestId('list');
  expect(within(list).queryByText("give dog a bath")).toBeNull();
});

// Ordered TODOs
test(qase([5], 'Ordered TODOs'), () => {
  const { container } = render(<App initialData={testData}/>);

  let todos = container.querySelectorAll('[name="todo"]');

  const ids = Array.from(todos).map(t => t.id);
  expect(ids).toEqual(['2', '1'])
});