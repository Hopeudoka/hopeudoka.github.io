const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector(".menu-list");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active-dot'));
            slides[n].classList.add('active');
            dots[n].classList.add('active-dot');
            currentSlideIndex = n;
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }

        function prevSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
        }
        function currentSlide(n){
            showSlide(n);
        }
        // Optional: Automatic sliding
        setInterval(nextSlide, 3000); // Change slide every 3 seconds