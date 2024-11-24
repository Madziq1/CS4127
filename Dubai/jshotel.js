document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => initializeSlider(slider));
});

function initializeSlider(slider) {
    const slides = slider.querySelectorAll(".slides img");
    let slideIndex = 0;
    let intervalId = null;

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(() => nextSlide(slider, slides), 5000);
    }

    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach(slide => slide.classList.remove("displaySlide"));
        slides[slideIndex].classList.add("displaySlide");
    }

    slider.querySelector(".prev").addEventListener("click", () => {
        clearInterval(intervalId);
        slideIndex--;
        showSlide(slideIndex);
        restartInterval();
    });

    slider.querySelector(".next").addEventListener("click", () => {
        clearInterval(intervalId);
        slideIndex++;
        showSlide(slideIndex);
        restartInterval();
    });

    function nextSlide(slider, slides) {
        slideIndex++;
        showSlide(slideIndex);
    }

    function restartInterval() {
        intervalId = setInterval(() => nextSlide(slider, slides), 5000);
    }
}

