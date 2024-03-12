// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare the URL with latitude, longitude, units, and API key
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7598&lon=6.6417&units=imperial&appid=beac1fabca8651e7bebefb4273a65d37';

// Define an asynchronous function to fetch weather data
async function apiFetch() {
  try {
    // Fetch weather data from the API
    const response = await fetch(url);
    
    // Check if the response is OK
    if (response.ok) {
      // Convert response to JSON format
      const data = await response.json();
      
      // Output the results to the console for testing
      console.log(data);
      
      // Manipulate HTML elements to display weather information
      currentTemp.textContent = data.main.temp + ' °F';
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      captionDesc.textContent = data.weather[0].description;
    } else {
      // If response is not OK, throw an error
      throw Error(await response.text());
    }
  } catch (error) {
    // Output any errors to the console
    console.error(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}


// Invoke the apiFetch function
apiFetch();
