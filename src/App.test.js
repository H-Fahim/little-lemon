import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/Main/Booking/BookingForm';
import { initializeTimes, timesReducer } from './components/Main/Booking/BookingPage';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns correct initial times', () => {
  // Initialize times
  const initialTimes = initializeTimes();
  
  // Expected array of times
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  
  expect(initialTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same state', () => {
  // Initial state
  const state = ['17:00', '18:00', '19:00'];
  
  // Create action
  const action = { type: 'UPDATE_TIMES', payload: '2024-01-01' };
  
  // Get new state
  const newState = timesReducer(state, action);
  // Verify same state is returned
  expect(newState).toEqual(state);
});