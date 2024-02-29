const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password2");

kp2.addEventListener("focusout", checkSame);

function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

document.getElementById('emailForm').addEventListener('submit', function(event) {
	event.preventDefault();

	var emailInput = document.getElementById('email').value;
	var byuiEmailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

	if (byuiEmailPattern.test(emailInput)) {
		alert('Email is valid. Proceed with submission.');
	} else {
		alert('Please enter a valid BYUI email address.');
	}});

