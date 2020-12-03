$('.slider').slick({
	draggable: true,
	autoplay: true,
	autoplaySpeed: 7000,
	arrows: false,
	dots: true,
	fade: true,
	speed: 700,
	infinite: true,
	cssEase: 'linear',
	touchThreshold: 100
});
$('.slick-cate').slick({
	arrows: true,
	infinite: true,
	speed: 240,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				infinite: true,
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}
	]
});
// slick blog
$('.slick-blog').slick({
	arrows: true,
	infinite: true,
	speed: 240,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				infinite: true,
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				infinite: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
// lên đầu trang
var backTop = $('.back-to-top');
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		backTop.addClass('show');
	} else {
		backTop.removeClass('show');
	}
});
backTop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, '300');
});
// contact
$(function() {
	$('.ws-contact-icon.btnn').click(function() {
		$('.ws-contact-icon').toggleClass('is-active');
	});
});
$(document).mouseup(function(e) {
	if (!$('.ws-contact-icon').is(e.target) && $('.ws-contact-icon').has(e.target).length === 0) {
		$('.ws-contact-icon').removeClass('is-active');
	}
});
// slick-gallery
$('.slick-gallery').slick({
	arrows: true,
	infinite: false,
	speed: 240,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
	responsive: [
		{
			breakpoint: 575,
			settings: {
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
// navmobile
const navMobile = () => {
	const navLinkEls = [ ...document.querySelectorAll('.nav-mobile__angle') ];
	const navLinkElsChild = [ ...document.querySelectorAll('.angle-dropmenu-mobile') ];
	const menuActiveEls = [ ...document.querySelectorAll('.nav__link') ];
	const burger = document.querySelector('.nav-icon-bar');
	const navMobile = document.querySelector('.nav-mobile');
	// show navMobile
	burger.addEventListener('click', () => {
		navMobile.classList.toggle('nav-mobile-active');
	});
	// active menu
	for (var i = 0; i < menuActiveEls.length; i++) {
		menuActiveEls[i].addEventListener('click', function(event) {
			// event.preventDefault();
			var current = document.getElementsByClassName('active-menu');
			current[0].className = current[0].className.replace(' active-menu', '');
			this.className += ' active-menu';
		});
	}
	// chil
	navLinkEls.forEach((navLinkEl) => {
		navLinkEl &&
			navLinkEl.addEventListener('click', (event) => {
				event.preventDefault();
				const dropAngleUp = event.currentTarget;
				const dropMenuSub1 = event.currentTarget.nextElementSibling;
				dropMenuSub1.classList.toggle('drop-nav-mobile-active');
				dropAngleUp.classList.toggle('drop-angle-mobile-active');
			});
	});
	// chil1
	navLinkElsChild.forEach((navLinkElChild) => {
		navLinkElChild &&
			navLinkElChild.addEventListener('click', (event) => {
				event.preventDefault();
				const dropAngleUp2 = event.currentTarget;
				const dropMenuSub2 = event.currentTarget.nextElementSibling;
				const activeLink = event.currentTarget.previousElementSibling;
				dropMenuSub2.classList.toggle('drop-nav-mobile2-active');
				activeLink.classList.toggle('active-link');
				dropAngleUp2.classList.toggle('drop-angle-mobile2-active');
			});
	});
};
// show search bar
const showSearch = () => {
	const searchEl = document.querySelector('.search-icon');
	const searchBar = document.querySelector('.search-bar');
	const bgOverlay = document.querySelector('.bg-overlay');
	const closeSearchBar = document.querySelector('.btn-search-close');
	searchEl.addEventListener('click', () => {
		searchBar.classList.toggle('search-bar-show');
		bgOverlay.classList.toggle('bg-overlay-active');
	});
	closeSearchBar.addEventListener('click', () => {
		searchBar.classList.toggle('search-bar-show');
		bgOverlay.classList.toggle('bg-overlay-active');
	});
	bgOverlay.addEventListener('click', () => {
		searchBar.classList.toggle('search-bar-show');
		bgOverlay.classList.toggle('bg-overlay-active');
	});
};
// list product
const listProduct = () => {
	const plusAside = [ ...document.querySelectorAll('.plus-aside') ];
	const filterProducts = document.querySelector('.filter');
	const asideFilter = document.querySelector('.aside-filter');
	const angleFilter = document.querySelector('.angle-filter');
	plusAside.forEach((item) => {
		item.addEventListener('click', () => {
			const plusActive = event.currentTarget;
			const asideChild = event.currentTarget.nextElementSibling;
			asideChild.classList.toggle('aside-chil1-active');
			plusActive.classList.toggle('plus-active');
		});
	});
	filterProducts.addEventListener('click', () => {
		const filter = event.currentTarget;
		filter.classList.toggle('filter-active');
		asideFilter.classList.toggle('aside-filter-active');
		angleFilter.classList.toggle('angle-filter-active');
	});
};
navMobile();
showSearch();
listProduct();
