import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

const BookingPage = () => {
  const navigate = useNavigate();
  const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  const submitForm = async (formData) => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Redirect to the ConfirmedBooking component
      navigate('/confirmation');
    } catch (error) {
      console.error(error);
      // Handle the error as needed
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
