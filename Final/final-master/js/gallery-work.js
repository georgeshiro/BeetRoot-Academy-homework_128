(function(){
	'use strict'
    var $container = $('.gallery-work').masonry({
		itemSelector: '.gallery-work__item',
		masonry: {
			horizontalOrder: true,
			percentPosition: true
		}
	});
})();