// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if temperature is <= 50°F and wind speed is > 3.0 mph
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill factor
        var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1); // Return wind chill value rounded to 1 decimal place
    } else {
        return "N/A"; // Return "N/A" if conditions are not met
    }
}

// Get temperature and wind speed elements from HTML
const temperatureElement = document.getElementById('temperature');
const windSpeedElement = document.getElementById('windSpeed');
const windChillElement = document.getElementById('windChill');

// Get temperature and wind speed values from HTML elements
const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

// Calculate wind chill
const windChill = calculateWindChill(temperature, windSpeed);

// Display wind chill value in HTML
windChillElement.textContent += windChill;
