import Swiper, { Navigation, Autoplay } from 'swiper';
import '../../scss/base/swiper.scss';
// import "../../scss/libs/swiper.scss";
// import 'swiper/css';

function initSliders() {
	if (document.querySelector('.main-banner__slider')) {
		new Swiper('.main-banner__slider', {
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			loop: true,

			effect: 'fade',
			autoplay: {
				delay: 3000,
			},

			navigation: {
				prevEl: '.main-banner-slider-btn-prev',
				nextEl: '.main-banner-slider-btn-next',
			},

			on: {
				init: function (swiper) {
					const allSlidesPlace = document.querySelector('.main-slider-num-all');
					const allSlides = document.querySelectorAll('.main-banner__slide:not(.swiper-slide-duplicate)');
					allSlidesPlace.innerHTML = allSlides.length;
				},

				slideChange: function (swiper) {
					const currentSlidePlace = document.querySelector('.main-slider-num-current');
					const slideProgress = document.querySelector('.slider-control__progress');

					currentSlidePlace.innerHTML = swiper.realIndex + 1;
				},
			},
		});
	}

	if (document.querySelector('.card__slider')) {
		new Swiper('.card__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			autoHeight: false,
			speed: 800,
			loop: false,
			effect: 'fade',
			spaceBetween: 5,

			navigation: {
				prevEl: '.card-slider-btn-prev',
				nextEl: '.card-slider-btn-next',
			},
		});
	}

	if (document.querySelector('.articles-block__slider')) {
		new Swiper('.articles-block__slider', {
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			loop: false,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.card-slider-btn-prev',
				nextEl: '.articles-block__btn-next',
			},

			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10,
				},
				479.98: {
					slidesPerView: 1.5,
					spaceBetween: 15,
				},
				767.98: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				991.98: {
					slidesPerView: 2.5,
					spaceBetween: 25,
				},
				1110: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener('load', function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
