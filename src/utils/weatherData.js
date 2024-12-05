import axios from 'axios';


const API_KEY = import.meta.env.VITE_API_KEY;
const getCityData = async (city) => {
  try {
    // Get city coordinates based on the city name
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    );
    const { coord } = response.data;

    console.log("City coordinates:", coord);

    // Fetch 5-day/3-hour forecast using coordinates
    const forecastResponse = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&units=imperial&appid=${API_KEY}`
    );

    console.log("5-day forecast data:", forecastResponse.data);

    return forecastResponse.data; // Return the full forecast data
  } catch (error) {
    console.error("Error fetching city data:", error);
    throw error; // Re-throw the error so the calling function can handle it
  }
};

export default { getCityData };