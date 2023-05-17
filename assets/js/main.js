(function ($) {
    "use strict";

	/*----------------------------------------
	   Sticky nav
	------------------------------------------*/
	var $navStick = $('.header-logo-area');
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 80) {
			$navStick.addClass("stick");
		} else {
			$navStick.removeClass("stick");
			$('.header-logo-area').slideDown();
		};
	});

	/*----------------------------------------
	   Canvas Nav
	------------------------------------------*/
	$('ul.main-responsive-menu li.has-children span').on('click', function(){
		$(this).next('ul.responsive-submenu').slideToggle();
		$(this).toggleClass('toggle');
	}); 

    /*----------------------------------------
	   Main Slider
	------------------------------------------*/
	$('.main-slider-wrapper').slick({
		'type': true,
		'autoplay': true,
		'autoplaySpeed': 3000,
		'arrows': true,
		'prevArrow': '<div class="slide-arrow-left"><i class="ri-arrow-left-line"></i></div>',
		'nextArrow': '<div class="slide-arrow-right"><i class="ri-arrow-right-line"></i></div>',
		'dots': true,
		'fade': true,
		'infinite': true,
		'pauseOnHover': true,
		'slidesToScroll': 1,
		'speed': 300,
	});

    /*----------------------------------------
	   Colldection Slider
	------------------------------------------*/
	$('.collection-slider').slick({
		'type': true,
		'autoplay': false,
		'arrows': true,
		'prevArrow': '<div class="slide-arrow-left"><i class="ri-arrow-left-line"></i></div>',
		'nextArrow': '<div class="slide-arrow-right"><i class="ri-arrow-right-line"></i></div>',
		'dots': true,
		'fade': false,
		'infinite': true,
		'pauseOnHover': true,
		'slidesToScroll': 1,
		'speed': 300,
	});

    /*----------------------------------------
	   Featured Carousel
	------------------------------------------*/
	$('.carousel-wrapper').slick({
		'type': true,
		'autoplay': false,
		'arrows': true,
		'prevArrow': '<div class="slide-arrow-left"><i class="ri-arrow-left-line"></i></div>',
		'nextArrow': '<div class="slide-arrow-right"><i class="ri-arrow-right-line"></i></div>',
		'dots': true,
		'fade': false,
		'infinite': false,
		'pauseOnHover': true,
		'slidesToShow': 4,
		'slidesToScroll': 1,
		'speed': 300,

		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 667,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});

    /*----------------------------------------
	   Testimonial Carousel
	------------------------------------------*/
	$('.testimonial-wrapper').slick({
		'type': true,
		'autoplay': false,
		'arrows': true,
		'prevArrow': '<div class="slide-arrow-left"><i class="ri-arrow-left-s-line"></i></div>',
		'nextArrow': '<div class="slide-arrow-right"><i class="ri-arrow-right-s-line"></i></div>',
		'dots': true,
		'fade': false,
		'infinite': false,
		'pauseOnHover': true,
		'slidesToShow': 2,
		'slidesToScroll': 1,
		'speed': 300,
		'centerMode': false,

		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 320,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			}
		]
	});

	/*----------------------------------------
	   Hide Items
	------------------------------------------*/
	$('.shipping-text').click(function(){
		$(this).next('.shipping-form').slideToggle();
	});

	$('.shipping-text.seller').click(function(){
		$(this).next('.seller-form').slideToggle();
	});

	/*----------------------------------------
	   Price Range Slider
	------------------------------------------*/

	$("#min_price,#max_price").on('change', function () {

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());

	  if (min_price_range > max_price_range) {
		$('#max_price').val(min_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });
	  
	});


	$("#min_price,#max_price").on("paste keyup", function () {                                        

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());
	  
	  if(min_price_range == max_price_range){

			max_price_range = min_price_range + 100;
			
			$("#min_price").val(min_price_range);		
			$("#max_price").val(max_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });

	});

	$(function () {
	  $("#slider-range").slider({
		range: true,
		orientation: "horizontal",
		min: 0,
		max: 10000,
		values: [0, 10000],
		step: 100,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }
		  
		  $("#min_price").val(ui.values[0]);
		  $("#max_price").val(ui.values[1]);
		}
	  });

	  $("#min_price").val($("#slider-range").slider("values", 0));
	  $("#max_price").val($("#slider-range").slider("values", 1));

	});

	/*----------------------------------------
	   Video Play
	------------------------------------------*/
	$('.video-play-btn').click(function(){
		$('.video-thumbnail').hide();
		$('.video-content').hide();
	});

	/*----------------------------------------
	   Login Form Changer
	------------------------------------------*/
	$('.forgot-btn').on('click', function(){
		$('.login-area-wrapper').hide();
		$('.password-reset-area').css({'display':'block'});
	});

	$('.cancel-btn').on('click', function(){
		$('.login-area-wrapper').show();
		$('.password-reset-area').css({'display':'none'});
	});

	/*----------------------------------------
	   Footer Currency
	------------------------------------------*/
	$('.footer-bottom ul.currency-form li.has-children').on('click', function(){
		$('.footer-bottom ul.currency-form li.has-children ul.currency-sub').fadeToggle(100);
	});

	$(document).on('click', function(e) {
		if (!$(e.target).hasClass('has-children') && !$(e.target).parents('.has-children').length && !$(e.target).parents('.currency-form').length) {
			$('.currency-sub').fadeOut(100);
		}
	});

	/*----------------------------------------
	   Responsive Menu Currency
	------------------------------------------*/
	$('.responsive-currency-form li.has-children').on('click', function(){
		$('.responsive-currency-form li.has-children ul').fadeToggle(100);
	});

	$(document).on('click', function(e) {
		if (!$(e.target).hasClass('has-children') && !$(e.target).parents('.has-children').length && !$(e.target).parents('.responsive-currency-form').length) {
			$('.responsive-currency-sub').fadeOut(100);
		}
	});

	/*----------------------------------------
	   Filter Buttons
	------------------------------------------*/
	$('.filter-btn').on('click', function(){
		$(this).next('.filter-box').fadeToggle(100);
	});

	$(document).on('click', function(e) {
		if (!$(e.target).hasClass('filter-btn') && !$(e.target).parents('.filter-btn').length && !$(e.target).parents('.filter-box').length) {
			$('.filter-box').fadeOut(100);
		}
	});

	/*----------------------------------------
	   Inputs CSS Changing
	------------------------------------------*/

	//Footer Newsletter Form
	$('.footer-newsletter-form input').on('click', function(){
		$('.footer-newsletter-form label').css({
			'top' : '15px',
			'font-size' : '14px',
		});
	});
	  
	$(document).on('click', function(e) {
		if (!$(e.target).is('.footer-newsletter-form input') && !$(e.target).parents('.footer-newsletter-form input').length) {
		  $('.footer-newsletter-form label').css({
			'top' : '35px',
			'font-size' : '16px',
		  });
		}
	});

	//Cart Page Form
	$('.post-code-wrapper input').on('click', function(){
		$('.post-code-wrapper input').css({
			'padding' : '15px 40px 10px 14px',
			'font-size' : '14px',
		});
	});

	$(document).on('click', function(e) {
		if (!$(e.target).is('.post-code-wrapper input') && !$(e.target).parents('.post-code-wrapper input').length) {
		  $('.post-code-wrapper input').css({
			'padding' : '5px 40px 10px 14px',
			'font-size' : '16px',
		  });
		}
	});

	/*----------------------------------------
	   Login Form Changer
	------------------------------------------*/
	$('.forgot-password').on('click', function(){
		$('.sign-in-form').hide();
		$('.forgot-password-form').css({'display':'block'});
	});

	/*----------------------------------------
	   WOW Js
	------------------------------------------*/
	new WOW().init();



})(jQuery);
  