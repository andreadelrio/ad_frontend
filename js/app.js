$(document).foundation();

 $("#fpi-grid li").click(function(){
 	// $('[data-pri-details=' + $(this).data("pri-num") + ']').siblings().addClass("disno");	
 	$('.details-box').addClass('disno');
 	$('[data-fpi-details=' + $(this).data("fpi-num") + ']').toggleClass("disno");	
 });