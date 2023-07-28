import React, { useState, useEffect } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, submitForm }) => {
  const initialFormState = {
    name: '',
    phoneNumber: '',
    email: '',
    date: '',
    time: availableTimes[0],
    guests: 1,
    occasion: 'Birthday',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // Check if form is valid whenever formData changes
    setFormValid(
      formData.name !== '' &&
      formData.email.includes('@') &&
      formData.phoneNumber.length >= 10 &&
      formData.date !== '' &&
      formData.guests >= 1 &&
      formData.guests <= 10
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the submitForm function and pass the form data
    if (formValid) {
      submitForm(formData);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-labelledby="bookingForm">
      <div className="booking-form-left">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" id="full-name" name="name" value={formData.name} onChange={handleChange} required aria-required="true" className={formData.name === '' ? 'invalid' : ''} />

        <label htmlFor="phone-number">Phone Number</label>
        <input type="tel" id="phone-number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required aria-required="true" className={formData.phoneNumber.length < 10 ? 'invalid' : ''} />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required aria-required="true" className={!formData.email.includes('@') ? 'invalid' : ''} />
      </div>

      <div className="booking-form-right">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} required aria-required="true" className={formData.date === '' ? 'invalid' : ''} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="time" value={formData.time} onChange={handleChange} aria-required="true">
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
          required
          aria-required="true"
          className={formData.guests < 1 || formData.guests > 10 ? 'invalid' : ''}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} aria-required="true">
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <div className="button-container">
        {/* Use a button instead of an input for form submission */}
        <button type="submit" disabled={!formValid} aria-disabled={!formValid}>Make Your reservation</button>
      </div>

    </form>
  );
};

export default BookingForm;
