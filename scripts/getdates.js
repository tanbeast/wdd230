document.addEventListener("DOMContentLoaded", function() {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    // Set the current year in the first paragraph
    document.getElementById("copyright").innerText += currentYear;

    // Get the last modified date dynamically
    const lastModifiedDate = new Date(document.lastModified);

    // Set the last modified date in the second paragraph
    document.getElementById("lastModified").innerText += lastModifiedDate.toLocaleString();
});

// for nav
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});