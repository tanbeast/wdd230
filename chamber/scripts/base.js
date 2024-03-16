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
const text = document.querySelectorAll("div");
const heading = document.querySelectorAll("h1");
modeButton.addEventListener("click", () => {
    //light mode
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
        hero.style.background = "#000";
		section.forEach(section => {section.style.color = "#fff";});
		section.forEach(section => {section.style.border = "1px sloid red";});
		heading.forEach(heading => {heading.style.color = "#00d5ff";});
        text.forEach(text => {text.style.color = "#fff";});
		modeButton.textContent = "🔆";
        //dark mode
	} else {
        main.style.background = "#eee";
		hero.style.background = "#eee";
		section.forEach(section => {section.style.color = "#8B1E3F";});
		section.forEach(section => {section.style.border = "1px sloid black";});
		heading.forEach(heading => {heading.style.color = "#8B1E3F";});
        text.forEach(text => {text.style.color = "#8B1E3F";});
		modeButton.textContent = "🕶️";
	}
});
