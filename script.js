$(document).ready(function(){
	$('.js-abbr').on('click', function(e){
		e.preventDefault();
		$(this).addClass('active');
	});

	$('.js-show-swipe').on('click', function(e){
		e.preventDefault();
		if ($(window).width() >= 768){
			$('.info-panel--swipe').toggleClass('info-panel--active');
			var width = $( ".content" ).width();
			if ($('.info-panel--swipe').hasClass('info-panel--active')){
				$('.info-panel--swipe').animate({
					left : 0,
				}, {
					duration : 1000,
					step: function( now, fx ){
				      	$( ".content" ).css( "padding-left", 400 + now );
				    }
				});
			}
			else{
				$('.info-panel--swipe').animate({
					left : -400,
				}, {
					duration : 1000,
					step: function( now, fx ){
				      	$( ".content" ).css( "padding-left", 400 + now );
				    }
				});
			}
		}
	});

	var hammertime = new Hammer(window.document.body);
    hammertime.on('swipe', function(event) {
    	if ($(window).width() < 768){
	        var deltaX = event.deltaX,
	            deltaY = event.deltaY;
	       	$('.info-panel--swipe').toggleClass('info-panel--active');
       	}
    });

});