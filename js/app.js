$(document).foundation();

 $(".fpi-row li").click(function(){
 	// $('[data-pri-details=' + $(this).data("pri-num") + ']').siblings().addClass("hidden");	
 	$('.details-box').addClass('hidden');
 	$('[data-fpi-details=' + $(this).data("fpi-num") + ']').toggleClass("hidden");	
 });

	$(".ion-close-circled").click(function(){
		var scrollLevel = window.pageYOffset;
		console.log(scrollLevel);
		$(this).parents().find('.details-box').addClass('hidden');
		window.scrollTo(0, scrollLevel);
	});