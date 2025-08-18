import Heading from "../Sections/ReservePages/Heading";
import ReservationForm from "../Sections/ReservePages/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookinsApi";

// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

// Initialize times function
const initializeTimes = () => {
  return fetchAPI(new Date());
};

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(timesReducer, null, initializeTimes);

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </>
  );
}
