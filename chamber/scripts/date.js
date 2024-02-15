// Check if localStorage has a lastVisitDate key
if (localStorage.getItem('lastVisitDate')) {
    // Get the last visit date from localStorage
    var lastVisitDate = new Date(localStorage.getItem('lastVisitDate'));
    // Get the current date
    var currentDate = new Date();
    // Calculate the time difference in milliseconds
    var timeDifference = currentDate - lastVisitDate;
    // Calculate the number of days between visits
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    // Display different messages based on the time difference
    if (daysDifference === 0) {
        document.getElementById('welcome').innerHTML = "Back so soon! Awesome!";
    } else {
        if (daysDifference === 1) {
            document.getElementById('welcome').innerHTML = "You last visited 1 day ago.";
        } else {
            document.getElementById('welcome').innerHTML = "You last visited " + daysDifference + " days ago.";
        }
    }
} else {
    // If it's the first visit, display a welcome message
    document.getElementById('welcome').innerHTML = "Welcome! Let us know if you have any questions.";
}
//for the callander
const daysContainer = document.querySelector('.days');

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const headerDiv = document.createElement('div');
headerDiv.classList.add('header');
headerDiv.textContent = months[currentMonth] + ' ' + currentYear;
daysContainer.appendChild(headerDiv);

const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

for (let day = 1; day <= totalDays; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    dayDiv.textContent = day;
    daysContainer.appendChild(dayDiv);
}
