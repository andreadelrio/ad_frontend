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
  var menuItems = $('.mobile-menu ul li');
	if ($(window).width() <= 736) {
		$("#site-title").addClass("pt-5");
  	mobileTrigger.click(function(){
  		mobileMenu.toggleClass("active");
  	});
	};

	//window resize
	$(window).resize(function () {
		if ($(window).width() <= 736) {
			$("#site-title").addClass("pt-7");
			mobileTrigger.click(function(){
				mobileMenu.toggleClass("active");
			});
		};
	});

	//close menu when clicking on menu item
	menuItems.click(function(){
  	mobileMenu.toggleClass("active");
	});

//FPIs grid
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