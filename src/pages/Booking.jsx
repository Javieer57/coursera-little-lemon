import React, { useReducer } from "react";
import { BookingForm } from "../components/BookingForm";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return [...state];
    default:
      throw new Error();
  }
};

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const Booking = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatchAvailableTimes={dispatchAvailableTimes}
    />
  );
};
