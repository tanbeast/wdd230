// for the three day forcast 
document.addEventListener('DOMContentLoaded', function() {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'beac1fabca8651e7bebefb4273a65d37';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=43.30&lon=-113.94&units=imperial&cnt=24&appid=${apiKey}`;
  
    // Function to fetch the forecast data
    async function fetchForecast() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching forecast:', error);
        }
    }
  
    // Function to display the forecast on the webpage
    function displayForecast(forecastData) {
        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = ''; // Clear previous forecast
  
        // Extract forecast data for the next three days
        const threeDayForecast = forecastData.list.filter((item, index) => index < 24); // 8 forecasts per day, 3 days
  
        // Loop through the three-day forecast data and calculate high and low temperatures for each day
        let currentDate = null;
        let currentDayForecast = null;
        threeDayForecast.forEach((forecast, index) => {
            const date = new Date(forecast.dt * 1000); // Convert timestamp to date
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });
  
            // Check if the forecast belongs to a new day
            if (currentDate !== day) {
                // Display the high and low temperatures for the previous day
                if (currentDayForecast) {
                    const forecastElement = document.createElement('div');
                    forecastElement.classList.add('forecast-item');
                    forecastElement.innerHTML = `<p>${currentDate}: High ${currentDayForecast.maxTemp}&deg;C, Low ${currentDayForecast.minTemp}&deg;C</p>`;
                    forecastContainer.appendChild(forecastElement);
                }
  
                // Update the current date and create a new object to hold the forecast for the current day
                currentDate = day;
                currentDayForecast = {
                    maxTemp: forecast.main.temp_max,
                    minTemp: forecast.main.temp_min
                };
            } else {
                // Update the high and low temperatures if the forecast belongs to the same day
                currentDayForecast.maxTemp = Math.max(currentDayForecast.maxTemp, forecast.main.temp_max);
                currentDayForecast.minTemp = Math.min(currentDayForecast.minTemp, forecast.main.temp_min);
            }
        });
  
        // Display the forecast for the last day
        if (currentDayForecast) {
            const forecastElement = document.createElement('div');
            forecastElement.classList.add('forecast-item');
            forecastElement.innerHTML = `<p>${currentDate}: High ${currentDayForecast.maxTemp}&deg;F, Low ${currentDayForecast.minTemp}&deg;F</p>`;
            forecastContainer.appendChild(forecastElement);
        }
    }
    
    // Fetch forecast data and display it when the DOM content is loaded
    fetchForecast().then(displayForecast);
  });