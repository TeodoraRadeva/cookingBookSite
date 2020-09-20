let navBar = document.getElementById("navMenu");
let menuButton = document.getElementById("hamburger");
let closebutton = document.getElementById("close");

$('#hamburger').click(function() {
	showNavBar();	
	hideMenuButton();
	showCloseButton();
});

function showNavBar() {
	navBar.classList.add("mobile");
}

function hideMenuButton() {
	menuButton.style.display = "none";
}

function showCloseButton() {
	closebutton.style.display = "inline-block";
}

closebutton.onclick = function() {
	removeClassNavBar();
	displayMenuButton();
	hideCloseButton();
}

function removeClassNavBar() {
	navBar.classList.remove("mobile");
}

function displayMenuButton() {
	menuButton.style.display = "inline-block";
}

function hideCloseButton() {
	closebutton.style.display = "none";
}
