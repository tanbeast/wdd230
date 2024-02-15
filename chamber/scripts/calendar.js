const daysContainer = document.querySelector('.days');
const headerDiv = document.querySelector('.header');

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

headerDiv.textContent = currentYear + ' ' + months[currentMonth];

// Display days of the week
const weekdaysDiv = document.createElement('div');
weekdaysDiv.classList.add('weekdays');
daysOfWeek.forEach(day => {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = day;
    weekdaysDiv.appendChild(dayDiv);
});
headerDiv.appendChild(weekdaysDiv);

// Display days of the month
const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
const today = currentDate.getDate();

for (let day = 1; day <= totalDays; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    dayDiv.textContent = day;
    if (day === today) {
        dayDiv.classList.add('highlight');
    }
    daysContainer.appendChild(dayDiv);
}
