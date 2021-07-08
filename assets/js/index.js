const card = document.querySelectorAll(".card");
const overlay = document.querySelectorAll(".overlay");

for (let i = 0; i < card.length; i++) {
	card[i].addEventListener("mouseenter", overlayVisible);
	card[i].addEventListener("mouseleave", overlayHidden);

	function overlayVisible() {
		overlay[i].classList.add("overlay-visible");
	}

	function overlayHidden() {
		overlay[i].classList.remove("overlay-visible");
	}
}
