// Saari slides aur buttons ko select karna
const slides = document.querySelectorAll('.slide-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlideIndex = 0;

// Slide change karne ka function
function showSlide(index) {
    // Purani active slide se status hatana
    slides[currentSlideIndex].classList.remove('active');
    
    // Naya index update karna boundaries check karke
    currentSlideIndex = index;
    if (currentSlideIndex < 0) currentSlideIndex = 0;
    if (currentSlideIndex >= slides.length) currentSlideIndex = slides.length - 1;
    
    // Nayi slide ko active class dena
    slides[currentSlideIndex].classList.add('active');
}

// Next Button Click Logic
nextBtn.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        showSlide(currentSlideIndex + 1);
    }
});

// Prev Button Click Logic
prevBtn.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        showSlide(currentSlideIndex - 1);
    }
});

// Keyboard se slide change karne ka system (Optional & Professional)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === ' ') { // Right arrow ya Spacebar for Next
        if (currentSlideIndex < slides.length - 1) showSlide(currentSlideIndex + 1);
    } else if (event.key === 'ArrowLeft') { // Left arrow for Prev
        if (currentSlideIndex > 0) showSlide(currentSlideIndex - 1);
    }
});