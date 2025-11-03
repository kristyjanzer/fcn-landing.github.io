// Burger Menu
const body = document.querySelector("body");
const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".header .header-button-menu");
const burgerBody = document.querySelector(".header .header-button-menu__body");


burgerMenu.addEventListener("click", (e) => {
  header.classList.toggle("header-menu-open");
  burgerBody.classList.toggle("active");
  body.classList.toggle("lock");
  e.stopPropagation();
});


$(".header-info__columns").clone().appendTo(".header-button-menu__body");
$(".uni-columns .uni-columns__image").clone().appendTo(".uni-image--mobile");


// Content Ranks Slider
$('.content-ranks-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 500,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        },
      }
    ]
});




// Progress Bar
document.addEventListener('DOMContentLoaded', () => {
    const progressContainers = document.querySelectorAll('.progress-container');

    function initProgressBar(container) {
        const progressLine = container.querySelector('.progress-line');
        const progressFill = progressLine.querySelector('.progress-line__fill');
        const markers = container.querySelectorAll('.markers__mark');
        let lastValue = parseInt(progressLine.dataset.value);

        function updateProgress() {
            const currentValue = parseInt(progressLine.dataset.value);

            progressFill.style.width = `${currentValue}%`;

            markers.forEach(marker => {
                const markerValue = parseInt(marker.dataset.value);

                if (currentValue >= markerValue) {
                    marker.style.setProperty('--before-width', '20px');
                    marker.style.setProperty('--before-height', '20px');
                } else {
                    marker.style.setProperty('--before-width', '0');
                    marker.style.setProperty('--before-height', '0');
                }
            });
        }

        updateProgress();

        setInterval(() => {
            updateProgress();
        }, 100);
    }

    progressContainers.forEach(initProgressBar);
});


