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

	//mobile nav
  var nav = $('nav');
  var body = $('body');
  var mobileTrigger = $('#mobile-trigger');
  var mobileMenu = $('.mobile-menu');
	if ($(window).width() <= 736) {
  	mobileTrigger.click(function(){
			console.log("click");
  		mobileMenu.toggleClass("active");
	    body.toggleClass("mobile-menu-active");
	    if (mobileMenu.hasClass("active")) {
	    	nav.css("height", $(window).height());
	    } else {
	    	nav.css("height", "");
	    };
  	});
	};

	//window resize
	$(window).resize(function () {
		console.log('resized');
		if ($(window).width() <= 736) {
	  	mobileTrigger.click(function(){
				console.log("click inside resize");
	  		mobileMenu.toggleClass("active");
		    body.toggleClass("mobile-menu-active");
		    if (mobileMenu.hasClass("active")) {
		    	nav.css("height", $(window).height());
		    } else {
		    	nav.css("height", "");
		    };
	  	});
		} else {
			mobileMenu.removeClass("active");
		  body.removeClass("mobile-menu-active");
		  nav.css("height", "");
		};
	});
	//

$(".fpi-ul li").click(function(e){

	$('.fpi-row').removeClass('down');
	$(".details-box").removeClass('open');
	$('.details-box .detail-box').addClass('hidden');
	$('[data-fpi-details=' + $(this).data("fpi-num") + ']').removeClass("hidden");	

	if(!$(this).parents('.fpi-row').siblings('.fpi-row').hasClass('down')) {
		$(this).parents('.fpi-row').siblings('.fpi-row').toggleClass('down');
		$(this).parents('.fpi-row').prevAll('.fpi-row').removeClass('down');
	};

	if(!$(this).parent().siblings('.details-box').hasClass('open')) {
		$(this).parent().siblings('.details-box').toggleClass('open');
	};

	return false;
	e.preventDefault();
});

$("#toggle").click(function(){
	$("#grid").toggleClass("hidden");
	$(this).toggleClass("ion-navicon-round");
	$(this).toggleClass("ion-android-apps");
	$("#list").toggleClass("hidden");
});