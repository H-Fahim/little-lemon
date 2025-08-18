
import Heading from '../ReservePages/Heading';
import ReservationForm from "../ReservePages/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../../bookinsApi";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
