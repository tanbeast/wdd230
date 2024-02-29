var birthdate = new Date('2006-12-23');    
// Calculate the current date
var currentDate = new Date();
// Calculate the difference in milliseconds between the current date and the birthdate
var ageDifference = currentDate - birthdate;
// Convert the age difference to years
var age = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365.25));
// Display the age on the web page
document.getElementById('age').textContent = "Your age is: " + age + " years";
