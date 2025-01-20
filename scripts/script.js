document.addEventListener("DOMContentLoaded", () => {
    const mainnav = document.querySelector(".navigation");
    const hambutton = document.querySelector(".menu-list");

    hambutton.addEventListener("click", () => {
        mainnav.classList.toggle("show");
        hambutton.classList.toggle("show");
    });

    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length === 0 || dots.length === 0) {
        console.error("Carousel slides or dots not found in the DOM.");
        return;
    }

    function showSlide(n) {
        if (n >= 0 && n < slides.length) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active-dot'));
            slides[n].classList.add('active');
            dots[n].classList.add('active-dot');
            currentSlideIndex = n;
        } else {
            console.error("Slide index out of bounds.");
        }
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    function currentSlide(n) {
        showSlide(n);
    }

    // Optional: Automatic sliding
    // setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Expose functions to global scope for button onclick handlers
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    window.currentSlide = currentSlide;
});