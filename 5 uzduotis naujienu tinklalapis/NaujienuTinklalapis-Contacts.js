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
		$('.loginContainerOverlay').addClass('open');/*Use the jQuery addClass() function to give the classes animated and shake to all your elements with the class well.*/
			//TIKRINTI AR LOGINCONTAINER TURI KLASE OPEN, JEIGU NETURI JA UZDETI. 
			//Tikrinti su if $hasClass , $removeClass, ir po to addClass.
		$('#loginContainer').slideToggle(function(){
		});
	});
});
/*LOGINCONTAINER BAR END*/


/*ROTATE FROM loginContainer TO signUpContainer (START)*/
$(document).ready(function(){
	$('.to_register').on('click', function(){
		$('.to_signup').addClass('switch');
	});
});
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
		$('.searchBoxOverlay').addClass('openSearchBox');/*Use the jQuery addClass() function to give the classes animated and shake to all your elements with the class well.*/

		$('.search-box').slideToggle(function(){
		});
	});
/*SEARCHBOX BAR END*/

/*#id map GOOGLE MAPS START*/
function initMap() {
	var location = {lat: 54.892813, lng: 23.916402};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 17,
		center: location
	});
	
	var marker = new google.maps.Marker({ position: new google.maps.LatLng(54.892813, 23.916402), title: 'Tautos žodis', map:map});
	/*var marker = new google.maps.Marker();
		marker.setPosition(new google.maps.LatLng(54.892813, 23.916402));
		marker.setMap(map);*/
};
/*#id map GOOGLE MAPS END*/

