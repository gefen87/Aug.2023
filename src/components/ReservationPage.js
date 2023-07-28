import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchData } from './api';

const API_ENDPOINT = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';

const ReservationPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isBookingConfirmed, setBookingConfirmed] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const fetchTimes = async () => {
      const data = await fetchData();
      setAvailableTimes(data.availableTimes);
    };

    fetchTimes();
  }, []);

  const submitForm = async (formData) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        setBookingConfirmed(true);
        setSubmitStatus(true);
        setSubmitMessage('Reservation successfully submitted!');
      } else {
        setSubmitStatus(false);
        setSubmitMessage('Failed to submit reservation. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus(false);
      setSubmitMessage(`Error: ${error.message}`);
    }
  };


  if (isBookingConfirmed) {
    return <ConfirmedBooking />;
  } else {
    return (
      <div>
        <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
        {submitStatus !== null && <p>{submitMessage}</p>}
      </div>
    );
  };
};

export default ReservationPage;
