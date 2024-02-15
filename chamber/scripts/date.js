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

// Store the current visit date in localStorage
localStorage.setItem('lastVisitDate', new Date());

