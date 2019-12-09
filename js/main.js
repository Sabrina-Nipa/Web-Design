$(document).ready(function(){


	$(window).on('scroll',function() {    
	    var scroll = $(window).scrollTop();
	    if (scroll < 1) {
	    $(".header-middle").removeClass("scroll-header");
	    }else{
	    $(".header-middle").addClass("scroll-header");
	 }
	});



    $('#mobile-manu-active').meanmenu({
    	meanScreenWidth: "700",
    	meanMenuContainer: ' .mobile-manu'
    });



    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToScroll: 1
    });
	


	$('.testimonials-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows:false,
        dots:true,
        autoplay:false,
        autoplaySpeed:3000,
        slidesToScroll: 1
    });



    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 5,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToScroll: 1,

        responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 4,
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
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
	    ]
    });


	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });
	


	$.scrollUp({
	    scrollName: 'scrollUp', // Element ID
	    topDistance: '300', // Distance from top before showing element (px)
	    topSpeed: 300, // Speed back to top (ms)
	    animation: 'fade', // Fade, slide, none
	    animationInSpeed: 200, // Animation in speed (ms)
	    animationOutSpeed: 200, // Animation out speed (ms)
	    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
	    activeOverlay: true, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });



    new WOW().init();



})



