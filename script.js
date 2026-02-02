const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Positionner les slides
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

// Bouton droite
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling || slides[0];

    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling || dots[0];

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});

// Bouton gauche
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];

    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling || dots[dots.length - 1];

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
});

// Auto défilement (toutes les 5 secondes)
setInterval(() => {
    nextButton.click();
}, 5000);
