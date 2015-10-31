$(document).foundation();

 // $(".fpi-row li").click(function(){
 // 	// $('[data-pri-details=' + $(this).data("pri-num") + ']').siblings().addClass("hidden");	
 // 	$('.details-box').addClass('hidden');
 // 	$('[data-fpi-details=' + $(this).data("fpi-num") + ']').toggleClass("hidden");	
 // });

	$(".ion-close-circled").click(function(){
		// $(this).parent().removeClass('open');
		$(".fpi-row").removeClass('down');
		$(".details-box").removeClass('open');
	});

// $(".row-1").click(function(e){
// 	$(".details-row-1").toggleClass('open');
// 	$(".row-2").toggleClass('open');
// 	$(".row-x").toggleClass('open');
// 	return false;
// 	e.preventDefault();
// });

$(".fpi-ul li").click(function(e){
	$('.details-box div').addClass('hidden');
	$('[data-fpi-details=' + $(this).data("fpi-num") + ']').toggleClass("hidden");	
	if(!$(this).parent().siblings('.details-box').hasClass('open')) {
		$(this).parent().siblings('.details-box').toggleClass('open');
	};
	if($(this).parents('.fpi-row').siblings('.fpi-row').hasClass('down')) {
		console.log('what to do');
	} else {
		$(this).parents('.fpi-row').siblings('.fpi-row').toggleClass('down');
		$('.fpi-row.first').removeClass('down');
	};
	return false;
	e.preventDefault();
});