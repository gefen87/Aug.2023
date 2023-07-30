import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

const ReservationPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isBookingConfirmed, setBookingConfirmed] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js') // URL to the API endpoint
      .then((res) => res.json())
      .then((data) => setAvailableTimes(data.availableTimes))
      .catch((err) => console.error(err));
  }, []);

  const submitForm = async (formData) => {
    try {
      setSubmitStatus('loading'); // set loading status
      const response = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setBookingConfirmed(true);
        setSubmitStatus('success'); // set success status
        setSubmitMessage('Reservation successfully submitted!');
      } else {
        setSubmitStatus('error'); // set error status
        setSubmitMessage('Failed to submit reservation. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error'); // set error status
      setSubmitMessage(`Error: ${error.message}`);
    }
  };

  if (isBookingConfirmed) {
    return <ConfirmedBooking />;
  } else {
    return (
      <div>
        <BookingForm availableTimes={availableTimes} submitForm={submitForm} submitStatus={submitStatus} />
        {submitStatus !== null && <p>{submitMessage}</p>}
      </div>
    );
  }
};

export default ReservationPage;
