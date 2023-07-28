const API_ENDPOINT = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js'
// Simulated fetchData function to fetch available times
export const fetchData = async (selectedDate = '') => {
  try {
    const response = await fetch(API_ENDPOINT + '?date=' + selectedDate);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
