import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

const BookingPage = () => {
  const navigate = useNavigate();

  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  const submitForm = async (formData) => {
    try {
      // Similar API call code as in the Main.js component
    } catch (error) {
      // Error handling
    }
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    </div>
  );
};

export default BookingPage;
