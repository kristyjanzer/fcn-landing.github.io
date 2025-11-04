// // Burger Menu
// const body = document.querySelector("body");
// const header = document.querySelector(".header");
// const burgerMenu = document.querySelector(".header .header-button-menu");
// const burgerBody = document.querySelector(".header .header-button-menu__body");


// burgerMenu.addEventListener("click", (e) => {
//   header.classList.toggle("header-menu-open");
//   burgerBody.classList.toggle("active");
//   // body.classList.toggle("lock");
//   e.stopPropagation();
// });


// $(".main-menu").clone().appendTo(".header-button-menu__body");
// // $(".uni-columns .uni-columns__image").clone().appendTo(".uni-image--mobile");

// Open menu
const menuItems = document.querySelectorAll('.header-button-menu');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();

        const isActive = item.classList.contains('active');

        menuItems.forEach(i => i.classList.remove('active'));

        if (!isActive) {
            item.classList.add('active');
        }
    });

    document.addEventListener('click', (e) => {
        if (!item.contains(e.target)) {
            item.classList.remove('active');
        }
    });

    $(".main-menu").clone().appendTo(".header-button-menu__body");
});



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

        function updateProgress() {
            const currentValue = parseInt(progressLine.dataset.value);

            progressFill.style.width = `${currentValue}%`;

            markers.forEach(marker => {
                const markerValue = parseInt(marker.dataset.value);

                if (currentValue >= markerValue) {
                    marker.classList.add('filled');
                } else {
                    marker.classList.remove('filled');
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


