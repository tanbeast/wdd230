// Select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const forecastContainer = document.querySelector('#forecast-container');

// Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.30&lon=-113.94&units=imperial&appid=beac1fabca8651e7bebefb4273a65d37';

// Define an asynchronous function named "apiFetch()" that uses a try block to handle errors.
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // Display results
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Invoke the apiFetch() function to fetch weather data
apiFetch();

// Function to display weather results
function displayResults(data) {
  // Capitalize each word of the weather description
  const capitalizedDesc = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  weatherDesc.textContent = capitalizedDesc;

  // Format the current temperature to show zero decimal points
  const currentTempValue = Math.round(data.main.temp);
  currentTemp.innerHTML = `${currentTempValue}&deg;F`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

}