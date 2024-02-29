function validatePasswords() {
	 password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('password2').value;
	const errorMessage = document.getElementById('errorMessage');
	const kap = document.getElementById('form');

	// Regular expression pattern for validating email addresses
	var emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

	// Get the email input field value
	var emailInput = document.getElementById('email').value;

	if (password !== confirmPassword || emailPattern.test(emailInput) == false) {
		alert("Make sure your passwords are the same and you use a valid email");
	} else {
	  kap.action = "record.html"
	  // Proceed with form submission or other actions
	}
  }

