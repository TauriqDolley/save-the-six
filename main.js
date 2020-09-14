window.onload = function () {
	animatePanel();
};

function animatePanel() {
	const el = document.getElementById("givengain");
	console.log(el);
	if (isScrolledIntoView(el)) {
		el.classList.add("animate__animated");
		el.classList.add("animate__backInLeft");
		el.classList.add("open");
	}
}

function isScrolledIntoView(el) {
	var rect = el.getBoundingClientRect();
	var elemTop = rect.top;
	var elemBottom = rect.bottom;

	// Only completely visible elements return true:
	var isVisible = elemTop >= 0 || elemBottom <= window.innerHeight;
	// Partially visible elements return true:
	//isVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return isVisible;
}
