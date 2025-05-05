import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.querySelectorAll('.products-slider').forEach(slider => {
    new Swiper(slider.querySelector('.swiper'), {
        slidesPerView: 3,
        spaceBetween: 40,
        speed: 600,
        loop: false,
        pagination: {
            el: slider.querySelector('.swiper-pagination'),
            clickable: true,
        },
        navigation: {
            prevEl: slider.querySelector('.prev'),
            nextEl: slider.querySelector('.next'),
        },
        autoplay: {
            delay: 8000
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            300: {
                slidesPerView: 1,
            }
        }
    });
});