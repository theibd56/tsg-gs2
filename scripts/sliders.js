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
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
});