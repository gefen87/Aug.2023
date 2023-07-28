import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import food from './food.png';
import BookingForm from './BookingForm';

const Main = () => {
  const navigate = useNavigate();

  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  // Function to submit the form data
  const submitForm = async (formData) => {
    try {
      // Make an API call to submit the form data to the backend
      // Replace 'your-api-endpoint' with the actual endpoint URL
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Assuming the response from the API is JSON, you can parse it as follows:
      const data = await response.json();

      // Check the response for success or failure
      if (response.ok) {
        // If the API call is successful, navigate to the booking confirmation page
        navigate('/confirmation');
      } else {
        // Handle error if the API call fails
        console.error('Form submission failed:', data.error);
      }
    } catch (error) {
      // Handle any other errors that might occur during the API call
      console.error('An error occurred while submitting the form:', error);
    }
  };

  return (
    <main className="main-main">
      <div className='content'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        {/* Pass the submitForm function to the BookingForm component */}
        <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
      </div>
      <div className='food'>
        <img src={food} alt="food" width={306} height={364}/>
      </div>
    </main>
  );
};

export default Main;
