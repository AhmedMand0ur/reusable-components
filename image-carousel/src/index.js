import "./styles.css";

const slide = (function () {

    const imgArray = Array.from(document.querySelectorAll('.image'));
    const navDotsArray = Array.from(document.querySelector('.nav-dots').children);
    if (imgArray.length === 0 || navDotsArray === 0) return;

    let currentIndex = imgArray.findIndex(img => img.classList.contains('visible'));
    if (currentIndex === -1) {
        currentIndex = 0;
        imgArray[currentIndex].classList.add('visible');
        navDotsArray[currentIndex].classList.add('active');
    }

    function updateCarousel(newIndex) {
        imgArray[currentIndex].classList.remove('visible'); // Remove from current image
        imgArray[newIndex].classList.add('visible'); // Add to new image

        navDotsArray[currentIndex].classList.remove('active');
        navDotsArray[newIndex].classList.add('active');

        currentIndex = newIndex; // Update the index
        resetAutoSlide();
    }

    function navigate(e) {
        let newIndex = navDotsArray.findIndex(dot => dot === e.target);

        updateCarousel(newIndex);
    }

    function next() {
        /* Calculate the next index (looping back to 0 if at the end) */
        let nextIndex = (currentIndex + 1) % imgArray.length;

        updateCarousel(nextIndex);
    }

    function previous() {
        /* Calculate the previous index (looping to last if at 0) */
        let prevIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;

        updateCarousel(prevIndex);
    }

    /* Auto-slide every 5 sec. */
    let autoSlide = setInterval(next, 5000);

    function resetAutoSlide() {
        clearInterval(autoSlide);   // stop current timer
        autoSlide = setInterval(next, 5000);    // restart timer
    }

    return { previous, next, navigate };

})();


document.querySelector('.next-btn').addEventListener('click', slide.next);
document.querySelector('.previous-btn').addEventListener('click', slide.previous);
document.querySelectorAll('.nav-dots button').forEach(dot => {
    dot.addEventListener('click', slide.navigate);
});