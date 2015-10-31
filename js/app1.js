// $(document).foundation();

 $(".fpi-row li").click(function(){
 	// $('[data-pri-details=' + $(this).data("pri-num") + ']').siblings().addClass("hidden");	
 });

// 	$(".ion-close-circled").click(function(){
// 		var scrollLevel = window.pageYOffset;
// 		console.log(scrollLevel);
// 		$(this).parents().find('.details-box').addClass('hidden');
// 		window.scrollTo(0, scrollLevel);
// 	});


$(document).ready(function() {
	// function close_accordion_section() {
	// 	$('.accordion .accordion-section-title').removeClass('active');
	// 	$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	// }

	$(".fpi-row li").click(function(e) {
	// $('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var newThis = $(this).parents().find('.accordion-section-title');
		var currentAttrValue = $(this).parents().find('.accordion-section-title').data('prueba');
		// newThis.siblings().removeClass('active');
		// $('.accordion .accordion-section-title').removeClass('active');
		// $('.accordion .accordion-section-content').removeClass('open');

		console.log(currentAttrValue);
	
	 	$('.details-box').addClass('hidden');
	 	$('[data-fpi-details=' + $(this).data("fpi-num") + ']').toggleClass("hidden");	

		if(newThis.hasClass('active')) {
			newThis.removeClass('active');
			$('#' + currentAttrValue).slideUp(300).removeClass('open'); 
			// $('.accordion .accordion-section-title').removeClass('active');
			// $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
		}else {
			// $('.accordion .accordion-section-title').removeClass('active');
			// $('.accordion .accordion-section-content').slideUp(300).removeClass('open');

			// Add active class to section title
			newThis.addClass('active');
			// Open up the hidden content panel
			$('#' + currentAttrValue).slideDown(300).addClass('open'); 
		}
		return false;
		e.preventDefault();
	});
});	