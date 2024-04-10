(function($) {
	'use strict';

	$('document').ready(function() {
		var accordion = $('.accordion');
		var accordionDescriptions = accordion.find('.accordion__wrap-text');
		var accordionItem = accordion.find('.accordion__item');
		var arrow = accordion.find('.accordion__arrow');
		accordionDescriptions.hide();
		accordionDescriptions.eq(0).show();
		arrow.eq(0).addClass('accordion__arrow--rotate');
		
		accordion.on('click', '.accordion__item', function(evt){
			evt.preventDefault();

			var accordionHeader = $(this);
			var accordionDescription = accordionHeader.next('.accordion__wrap-text');
			if (accordionDescription.css('display') === 'none') {
				accordionDescriptions.slideUp(600);
				accordionDescription.slideDown(600);
			}
			var arrowRotate = accordion.find('.accordion__arrow').removeClass('accordion__arrow--rotate');
			accordionHeader.find('.accordion__arrow').addClass('accordion__arrow--rotate');	
		});
	});

	$('document').ready(function(){
		$('.accordion__text').scrollbar();
	});
})($)
