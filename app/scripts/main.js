$(document).ready(function() {
	$(".menu-link").click(function(){
	      $("#header-mobile").toggleClass("active");
	      $(".toggle-mobile-menu").toggleClass("active");
	      $('.overlay-menu').toggleClass('overlay');
	});
	  $(".toggle-search").click(function() {
       $(".search-box").toggle();
       $("input[type='text']").focus();
     });

	  $('.home-slide').slick();
	  $('.home-slide-2').slick();
	  $('.slide-thumbnail-product').slick();
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
	  $('.multi-product-slide').slick({
		  dot: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 6,
		  slidesToScroll: 6,
		  vertical: true,
		});
	

    $('.countdown').each(function(index, value){
        var dateTime = $(this).attr('data-time');

        $(this).countdown(dateTime, function(event) {
            $(this).html(
                event.strftime('<ul class="list-time"><li class="cd-hours"><p class="countdown-number">%H</p></li> : <li class="cd-minutes"><p class="countdown-number">%M</p></li> : <li  class="cd-seconds"> <p class="countdown-number">%S</p></li></ul>')
            );
        });
    });
    $('.thumbnail-trend').each(function(index, value){
    	var $imageHover = $(this).find('.image-hover').attr('data-hover');
    	var $imageOrigin = $(this).find('.image-hover').attr('data-origin');
    	 $(this).find('.image-hover').attr('src',$imageOrigin);
    	$(this).mouseenter(function(){
    		
			  $(this).find('.image-hover').attr('src',$imageHover);
			
	 	});
	 	$(this).mouseleave(function(){
    		
			  $(this).find('.image-hover').attr('src',$imageOrigin);
			
	 	});
    });
    $( ".toggle-menu" ).each(function(index, value) {
	  $(this).click(function() {
		  $(this).find( ".sub-menu" ).slideToggle( "slow" );
		  $(this).toggleClass('active');
		});
	});
	$('.isotope-gallery').isotope({
	  	layoutMode: 'packery',
	  	itemSelector: '.item-gallery',
	  	
	});
	  $('.sticky-sidebar').simpleScrollFollow({
	   
	    limit_elem: $('.page-content')
	  });
	    var $backToTop = $('.back-to-top');

		$backToTop.click(function(event) {
			event.preventDefault();
			$('html,body').animate({
				scrollTop: '0px'
			}, 800);
		});
          
        var $backToBottom = $('.back-to-bottom');
		
		$backToBottom.click(function(event) {
			event.preventDefault();
			$('html,body').animate({
				scrollTop:$(document).height()
			}, 800);
		});
             
         $('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
	    var $active, $content, $links = $(this).find('a');

	    // If the location.hash matches one of the links, use that as the active tab.
	    // If no match is found, use the first link as the initial active tab.
	    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
	    $active.addClass('active');

	    $content = $($active[0].hash);

	    // Hide the remaining content
	    $links.not($active).each(function () {
	        $(this.hash).hide();
	    });

	    // Bind the click event handler
	    $(this).on('click', 'a', function(e){
	        // Make the old tab inactive.
	        $active.removeClass('active');
	        $content.hide();

	        // Update the variables with the new link and content
	        $active = $(this);
	        $content = $(this.hash);

	        // Make the tab active.
	        $active.addClass('active');
	        $content.show();

	        // Prevent the anchor's default click action
	        e.preventDefault();
	    });
	});
     $('.folow-button').click(function(){
     	$(this).addClass('active');
     	return false;
     });
});