import React, { useState } from 'react';

const BookingForm = ({ availableTimes, submitForm }) => {
  const initialFormState = {
    date: '',
    time: availableTimes[0],
    guests: 1,
    occasion: 'Birthday',
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'date') {
      // Dispatch an action to update availableTimes state when the date is changed
      // Dispatching not needed anymore since we're using the submitForm function
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the submitForm function and pass the form data
    submitForm(formData);
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {/* Use a button instead of an input for form submission */}
      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default BookingForm;
