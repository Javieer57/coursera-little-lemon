import React, { useState } from "react";
import "./BookingForm.css";

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleInputChange = (id, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    if (id === "date") {
      const selectedDate = new Date(value + "T00:00:00");
      const today = new Date();

      // Set the time of both dates to 00:00:00
      selectedDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      if (selectedDate.getTime() < today.getTime()) {
        setErrorMessage("Please select a date today or in the future.");
        setIsSubmitDisabled(true);
      } else {
        setErrorMessage("");
        setIsSubmitDisabled(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      console.log(formData);
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <div className="booking">
      <h2>Book a table</h2>

      <form className="booking__form" onSubmit={handleSubmit}>
        <DateInput
          value={formData.date}
          onChange={(value) => handleInputChange("date", value)}
        />
        {errorMessage && <p>{errorMessage}</p>}

        <TimeInput
          value={formData.time}
          onChange={(value) => handleInputChange("time", value)}
        />

        <GuestsInput
          value={formData.guests}
          onChange={(value) => handleInputChange("guests", value)}
        />

        <OccasionInput
          value={formData.occasion}
          onChange={(value) => handleInputChange("occasion", value)}
        />

        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Make Your reservation
        </button>
      </form>
    </div>
  );
};

const DateInput = ({ value, onChange }) => {
  const handleDateChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="date"
        value={value}
        onChange={handleDateChange}
        required
      />
    </>
  );
};

const TimeInput = ({ value, onChange }) => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const handleTimeChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="res-time">Choose time</label>
      <select id="time" value={value} onChange={handleTimeChange} required>
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
    </>
  );
};

const GuestsInput = ({ value, onChange }) => {
  const handleGuestsChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={value}
        onChange={handleGuestsChange}
        required
      />
    </>
  );
};

const OccasionInput = ({ value, onChange }) => {
  const handleOccasionChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={value}
        onChange={handleOccasionChange}
        required
      >
        <option value="">Select an occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
    </>
  );
};
