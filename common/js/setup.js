$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 1) {
		$('.menu').addClass('menu-auxiliar');
	} else {
		$('.menu').removeClass('menu-auxiliar');
	}
});
$('.owl-carousel').owlCarousel({
	loop: false,
	margin: 30,
	nav: false,
	center: false,
	responsive: {
		0: {
			items: 2
		},
		600: {
			items: 3
		},
		1000: {
			items: 6
		}
	}
})