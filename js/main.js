$(function(){

/** START JQUERY **/


/***************************************
			BURGER ANIMATION
			+ HIDDEN MENU
***************************************/


	/** setup **/
	$burger = $('.burger-container');
	$hiddenMenu = $('.hidden-menu');
	$hiddenMenuActive = ('hidden-menu-opened');
	$burgerSt1 = $('.st-first');
	$burgerSt1Active = ('st-first-active');
	$burgerStMd = $('.st-md');
	$burgerStMdActive = ('st-md-active');
	$burgerStLast = $('.st-last');
	$burgerStLastActive = ('st-last-active');

	function hiddenMenuAnim(){
		$hiddenMenu.toggleClass($hiddenMenuActive);
	}
	
	function burgerAnim(){
		$burgerSt1.toggleClass($burgerSt1Active);
		$burgerStMd.toggleClass($burgerStMdActive);
		$burgerStLast.toggleClass($burgerStLastActive);
	}

	$burger.click(hiddenMenuAnim);
	$burger.click(burgerAnim);

/***************************************
			BACK TOP TOP
			ANIMATION
***************************************/

$(document).ready(function() {

	/** setup **/

	var $targetToTop = $('.back-top');

		$targetToTop.on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 450; // Durée de l'animation (en ms)
			$('html, body').stop().animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});

/***************************************
			HEADER
			CHANGE BACKGROUND
***************************************/
		/** setup **/

		// var $header = $('#header');
		// var $headerActive = ('header-active');

		// function changeHeaderBg(){
		//    $(window).scroll(function () {
		//       if ($(this).scrollTop() > 50) {
		//          $header.addClass($headerActive);
		//       }
		//       if ($(this).scrollTop() < 50) {
		//          $header.removeClass($headerActive);
		//       }
		//    });
		// }

		// changeHeaderBg();







/** END JQUERY **/

});



