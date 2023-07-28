// Import the necessary testing libraries
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './reducerFunctions';

test('renders BookingForm with static text', () => {
  // Render the BookingForm component
  render(<BookingForm availableTimes={[]} />);

  // Use screen.getByText to find the static text in the component
  const chooseDateText = screen.getByText('Choose date');
  const chooseTimeText = screen.getByText('Choose time');
  const numberOfGuestsText = screen.getByText('Number of guests');
  const occasionText = screen.getByText('Occasion');
  const submitButton = screen.getByText('Make Your reservation');

  // Assert that the static text is found in the component
  expect(chooseDateText).toBeInTheDocument();
  expect(chooseTimeText).toBeInTheDocument();
  expect(numberOfGuestsText).toBeInTheDocument();
  expect(occasionText).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

// initializeTimes.test.js
import initializeTimes from './initializeTimes';

describe('initializeTimes function', () => {
  it('should return the initial state for availableTimes', () => {
    // Expected initial state for availableTimes
    const expectedInitialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    // Call the initializeTimes function
    const result = initializeTimes();

    // Assert that the result matches the expected initial state
    expect(result).toEqual(expectedInitialState);
  });
});

// updateTimes.test.js
import updateTimes from './updateTimes';

describe('updateTimes reducer function', () => {
  it('should update the availableTimes state based on the selected date', () => {
    // Current state of availableTimes
    const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    // Action to update the availableTimes state with a selected date
    const action = { type: 'UPDATE_TIMES', payload: '2023-07-31' };

    // Call the updateTimes reducer function with current state and action
    const updatedState = updateTimes(currentState, action);

    // Expected updated state based on the selected date
    const expectedUpdatedState = ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

    // Assert that the updated state matches the expected updated state
    expect(updatedState).toEqual(expectedUpdatedState);
  });
});

