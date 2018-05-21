/*LOGINCONTAINER BAR START*/
$(document).ready(function(){
	$('.logInbar').on('click', function(){
		//tikrina ar meniu yra ijungtas
		$('.loginContainerOverlay').on('click', function(){
			if($('.loginContainerOverlay').hasClass('open')){
				$('.loginContainerOverlay').removeClass('open');
				$('#loginContainer').css('display','none');
			}
		});
		//jeigu nebuvo ijungtas ijungia
		$('.loginContainerOverlay').addClass('open');/*Use the jQuery addClass() function to give the classes animated and shake to all your elements with the class well.
*/			//TIKRINTI AR LOGINCONTAINER TURI KLASE OPEN, JEIGU NETURI JA UZDETI. 
			//Tikrinti su if $hasClass , $removeClass, ir po to addClass.
		$('#loginContainer').slideToggle(function(){
		});
	});
});
/*LOGINCONTAINER BAR END*/


/*ROTATE FROM loginContainer TO signUpContainer (START)*/
/*$(document).ready(function(){
	$('.to_register').on('click', function(){
		$('.to_signup').addClass('switch');
	});
});*/
/*ROTATE FROM loginContainer TO signUpContainer (END)*/



/*ROTATE FROM loginContainer TO recoveryContainer (START)*/

/*ROTATE FROM loginContainer TO recoveryContainer (END)*/





/*SEARCHBOX BAR START*/
	//tikrina ar meniu yra ijungtas
	$('.active').on('click', function(){
		$('.searchBoxOverlay').on('click', function(){
			if($('.searchBoxOverlay').hasClass('openSearchBox')){
				$('.searchBoxOverlay').removeClass('openSearchBox');
				$('.search-box').css('display', 'none');
			}
		});
		//jeigu nebuvo ijungtas ijungia
		$('.searchBoxOverlay').addClass('openSearchBox');/*Use the jQuery addClass() function to give the classes animated and shake to all your elements with the class well.
*/
		$('.search-box').slideToggle(function(){
		});
	});
/*SEARCHBOX BAR END*/



/*PAGE SLIDESHOW START*/
	  $(document).ready(function() {
	    $(".news").news(); 
	  });
/*PAGE SLIDESHOW END*/

/*PAGE SLIDESHOW SETTINGS (START)*/
$(document).ready(function() {
    $("news").news({
        item: 3,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 		
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
		
        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
		
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
		
        rtl:false,
        adaptiveHeight:false,
		
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
		
        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
		
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
		
        responsive : [],
		
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });
});
/*PAGE SLIDESHOW SETTINGS (END)*/

$(document).ready(function() {
    var slider = $(".news").news();
    slider.goToSlide(2);
    slider.goToPrevSlide();
    slider.goToNextSlide();
    slider.getCurrentSlideCount();
    slider.refresh();
    slider.play(); 
    slider.pause();    
  });