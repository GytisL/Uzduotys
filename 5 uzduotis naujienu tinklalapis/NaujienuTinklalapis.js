/*LOGINCONTAINER BAR START*/
$(document).ready(function(){
	$('.logInbar').on('click', function(){
		//tikrina ar meniu yra ijungtas
		$('.loginContainerOverlay').on('click', function(){
			if($('.loginContainerOverlay').hasClass('open')){
				$('.loginContainerOverlay').removeClass('open');
				$('#recoveryContainer').css('display','none');
			}
		});
		//jeigu nebuvo ijungtas ijungia
		$('.loginContainerOverlay').addClass('open');/*Use the jQuery addClass() function to give the classes animated and shake to all your elements with the class well.
*/			//TIKRINTI AR LOGINCONTAINER TURI KLASE OPEN, JEIGU NETURI JA UZDETI. 
			//Tikrinti su if $hasClass , $removeClass, ir po to addClass.
		$('#recoveryContainer').slideToggle(function(){
		});
	});
});
/*LOGINCONTAINER BAR END*/


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