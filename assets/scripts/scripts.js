// ReloadIFrame
function reloadIframe(element) {
	// Find the parent element of the clicked link
	const parentDiv = element.parentElement;

	// Find the iframe within that parent element
	const iframe = parentDiv.querySelector("iframe");

	// Reload the iframe by modifying its src attribute
	if (iframe) {
		iframe.src = iframe;
	}
}

function hideUnhide(button) {
	const rockSections = document.getElementsByClassName("RockSection");
	const carouselBtn = document.getElementsByClassName("carousel-button");
	for (let i = 0; i < rockSections.length; i++) {
		if (rockSections[i].classList.contains("hidden")) {
			rockSections[i].classList.remove("hidden");
		} else {
			rockSections[i].classList.add("hidden");
		}
	}
}

// Carousel
let currentSlide = 0;

function updateCarousel() {
	const carouselWrapper = document.querySelector(".carousel-wrapper");
	const totalSlides = document.querySelectorAll(".carousel-item").length;
	const slideWidth = document.querySelector(".carousel-item").offsetWidth;

	carouselWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function reloadAllIframes() {
	const iframes = document.querySelectorAll("iframe"); // Seleciona todos os iframes no DOM

	for (const iframe of iframes) {
		reloadIframe(iframe); // Chama a função reloadIframe para cada iframe
	}
}

function prevSlide() {
	const totalSlides = document.querySelectorAll(".carousel-item").length;
	currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
	updateCarousel();

	// Chamada da função `reloadIframe` a cada mudança de slide
	reloadIframe(document.querySelectorAll(".carousel-item")[currentSlide]);
	reloadAllIframes();
}

function nextSlide() {
	const totalSlides = document.querySelectorAll(".carousel-item").length;
	currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
	updateCarousel();

	// Chamada da função `reloadIframe` a cada mudança de slide
	reloadIframe(document.querySelectorAll(".carousel-item")[currentSlide]);
	reloadAllIframes();
}

window.addEventListener("resize", updateCarousel);
