$(document).ready(function() {
	$(".menu-link").click(function(){
	      $("#header-mobile").toggleClass("active");
	      $(".toggle-mobile-menu").toggleClass("active");
	      $('body').addClass('overlay');
	});
	  $(".toggle-search").click(function() {
       $(".search-box").toggle();
       $("input[type='text']").focus();
     });
	  $('.home-slide').slick();
	  $('.member-slide').slick({
		  dot: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 5,
		  slidesToScroll: 5,
		  responsive: [
		    {
		      breakpoint: 1250,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
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

    $('.page-content').each(function(index, value){
        var dateTime = $(this).find(".countdown").attr('data-time');
        
        console.log(dateTime);
        $(this).find(".countdown").countdown(dateTime, function(event) {
            $(this).html(
                event.strftime('<ul class="list-time"><li class="cd-days"><p class="countdown-number">%D</p> </li> : <li class="cd-hours"><p class="countdown-number">%H</p></li> : <li class="cd-minutes"><p class="countdown-number">%M</p></li> : <li  class="cd-seconds"> <p class="countdown-number">%S</p></li></ul>')
            );
        });
    });
});