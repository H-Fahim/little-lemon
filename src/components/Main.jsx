import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

// Reducer function
export const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return state;
    default:
      return state;
  }
};

// Initialize times function
const initializeTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
};

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  return (
    <main>
      <BookingForm 
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </main>
  );
}

export default Main;