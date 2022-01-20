// JEST test case

test("Name of the test case", () => {
  const expectedResult = 4;

  const actualResult = 2 + 2;

  expect(expectedResult).toBe(actualResult);
});


// Testing library usefull methods
// check https://testing-library.com/docs/queries/about/ for more detailed information

// screen.<query-function>()...
//
// queries can be: 
// getByText - seraches the text contents
// getByTestId - searches thourgh elements with the data-testid property.
//
// There are also queryBy variants that return null instead of throwing if 
// no element is found, they are good to check for the existence of elements.

screen.getByText('test') // search first element with text 'test'
screen.getByTestId('test') // seraches first element with [data-testid="test"]

// you can also get them from the render method:
const { getByText, getByTestId, ... } = render(<App />)

getByText('test') // search first element with text 'test'
getByTestId('test') // seraches first element with [data-testid="test"]

// search within elements
const element = screen.getByTestId('foo')
within(element).getByText('bar')

// using normal query selector
const { container } = render(<App />);
let foo = container.querySelector('[name="foo"]');
let foos = container.querySelectorAll('[name="foo"]');

////////////////
// Assertions //
////////////////

expect(value).toEqual() // check equality
expect(value).toBeNull() // check nullness
expect(value).not.toEqual() 
expect(value).not.toBeNull() 
