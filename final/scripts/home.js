// Fetch weather data from OpenWeatherMap API
fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=beac1fabca8651e7bebefb4273a65d37&units=imperial')
.then(response => response.json())
.then(data => {
    // Display current temperature
    document.getElementById('currentTemp').textContent = `Current Temperature: ${data.main.temp}°F`;

    // Display current humidity
    document.getElementById('currentHumidity').textContent = `Current Humidity: ${data.main.humidity}%`;

    // Display wind speed in mph
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed.toFixed(2)} mph`;


    // Fetch forecast data for the next day at 15:00
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=beac1fabca8651e7bebefb4273a65d37&units=imperial`)
        .then(response => response.json())
        .then(forecastData => {
            // Find the forecast for the next day at 15:00
            const nextDayForecast = forecastData.list.find(entry => {
                const date = new Date(entry.dt * 1000);
                return date.getHours() === 15;
            });

            // Display next day's forecasted temperature
            document.getElementById('nextDayTemp').textContent = `Next Day Forecast (15:00): ${nextDayForecast.main.temp}°F`;
        });

    // Display weather details
    const weatherDetailsList = document.getElementById('weatherDetails');
    data.weather.forEach(weather => {
        const listItem = document.createElement('li');
        listItem.textContent = `${weather.main} - ${weather.description}`;

        const icon = document.createElement('img');
                    icon.src = `http://openweathermap.org/img/w/${weather.icon}.png`;
                    listItem.appendChild(icon);

        weatherDetailsList.appendChild(listItem);
    });

    // Display today's high temperature in the message
    document.getElementById('tempMax').textContent = data.main.temp_max;
})
.catch(error => {
    console.error('Error fetching weather data:', error);
});

// Function to close the message
function closeMessage() {
document.getElementById('message').style.display = 'none';
}