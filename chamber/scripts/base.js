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
const heading = document.querySelectorAll("h1");
const link = document.querySelectorAll(".links");
modeButton.addEventListener("click", () => {
    //dark mode
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
        hero.style.background = "#000";
		link.forEach(link => {link.style.color = "#DDC824";});
		section.forEach(section => {section.style.color = "#fff";});
		section.forEach(section => {section.style.border = "1px sloid red";});
		heading.forEach(heading => {heading.style.color = "#00d5ff";});
		
		
		modeButton.textContent = "🔆";
        //light mode
	} else {
        main.style.background = "#eee";
		hero.style.background = "#eee";
		link.forEach(link => {link.style.color = "#0000ee";});
		section.forEach(section => {section.style.color = "#8B1E3F";});
		section.forEach(section => {section.style.border = "1px sloid black";});
		heading.forEach(heading => {heading.style.color = "#8B1E3F";});
		
		modeButton.textContent = "🕶️";
	}
});
