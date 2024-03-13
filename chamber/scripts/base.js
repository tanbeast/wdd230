document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerText += currentYear;
    const lastModifiedDate = new Date(document.lastModified);
    document.getElementById("lastModified").innerText += lastModifiedDate.toLocaleString();
});
// for nav
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
// light/dark mode switch
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const hero = document.querySelector("#hero");
const section = document.querySelectorAll("section");
const heading = document.querySelectorAll("h1","h2");
modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
        hero.style.background = "#000";
		section.forEach(section => {section.style.color = "#fff";});
		section.forEach(section => {section.style.border = "1px sloid red";});
		heading.forEach(heading => {heading.style.color = "#00d5ff";});
		modeButton.textContent = "🔆";
	} else {
        main.style.background = "#eee";
		hero.style.background = "#eee";
		section.forEach(section => {section.style.color = "#8B1E3F";});
		section.forEach(section => {section.style.border = "1px sloid black";});
		heading.forEach(heading => {heading.style.color = "#8B1E3F";});
		modeButton.textContent = "🕶️";
	}
});


// for the button for the meet and great
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const closeBannerBtn = document.getElementById('closeBanner');

    // Function to check if the current day is Monday, Tuesday, or Wednesday
    function isWeekday() {
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
        return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday, Tuesday, or Wednesday
    }

    // Function to show or hide the banner based on the current day
    function toggleBanner() {
        if (isWeekday()) {
            banner.style.display = 'block';
        } else {
            banner.style.display = 'none';
        }
    }

    // Initial check to display the banner on page load
    toggleBanner();

    // Event listener for the close button
    closeBannerBtn.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});
