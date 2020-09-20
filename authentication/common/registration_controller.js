$("#registerButton").click(function() {
	checkPassword();
	checkEmail();
	confirmPassword();
});

function checkEmail() {
	if(!isEmailValid()) {
		$("#emailMessage").text("Please enter valid email");
		$("#emailMessage").css("color", "red");
	}
}

function isEmailValid() {
	let regexEmail = /[\d\w\W]+\@[a-zA-Z]+\.[a-zA-Z0-9]+/gm;
	return regexEmail.test($("#emailInput").val())
}

function checkPassword() {
	if(!isPasswordValid()) {
		$("#passMessage").text("Please insert valid password");
		$("#passMessage").css("color", "red");
	}
}

function isPasswordValid() {
	let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/gm;
	return regexPassword.test($("#passInput").val())
}

function confirmPassword() {
	if (isPasswordsEqual()) {
		$("#passMessage").text("Passwords does not match");
		$("#passMessage").css("color", "red");
	}
}

function isPasswordsEqual() {
	return $("#passInput").val() !== $("#confirmPass").val();
}

