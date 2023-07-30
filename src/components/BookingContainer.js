import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

const BookingContainer = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today's date
  const [submitStatus, setSubmitStatus] = useState('idle');

  const fetchData = async (date) => {
    try {
      const response = await fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`);
      const data = await response.json();
      return data.times; // Assuming the response includes a 'times' array
    } catch (error) {
      console.error("An error occurred while fetching the available times:", error);
      return []; // Return an empty array or handle error as needed
    }
  };

  const initializeTimes = async () => {
    try {
      const times = await fetchData(selectedDate);
      setAvailableTimes(times);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTimes = async (date) => {
    setSelectedDate(date);
    try {
      const times = await fetchData(date);
      setAvailableTimes(times);
    } catch (error) {
      console.error(error);
    }
  };

  const submitForm = async (formData) => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is successful
      if (response.ok) {
        setSubmitStatus('success'); // Set status to success
      } else {
        throw new Error('Failed to submit the form');
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      setSubmitStatus('error'); // Set status to error
    }
  };

  useEffect(() => {
    initializeTimes();
  }, [selectedDate]);

  return (
    <div>
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} submitStatus={submitStatus} />
      {submitStatus === 'success' && <p>Your reservation has been made!</p>}
      {submitStatus === 'error' && <p>Something went wrong. Please try again.</p>}
    </div>
  );
};

export default BookingContainer;
