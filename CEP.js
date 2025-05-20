const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show the next slide
function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Initialize the first slide as active
slides[currentSlide].classList.add('active');

// Set the slideshow interval
setInterval(showNextSlide, 5000); // Change slide every 5 seconds



document.addEventListener("DOMContentLoaded", function () {
    const featureContainers = document.querySelectorAll(".feature-container");

    function animateSections() {
        const triggerPoint = window.innerHeight * 0.85; 

        featureContainers.forEach((container) => {
            const containerTop = container.getBoundingClientRect().top;

            if (containerTop < triggerPoint) {
                container.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", animateSections);
    animateSections(); // Trigger on page load
});
window.onload = function () {
    const cartCount = localStorage.getItem('cartCount') || 0; // Get the cart count from localStorage
    document.querySelector('.cart-count').innerText = cartCount; // Update the cart icon on the page
};


