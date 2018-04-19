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


/*ROTATE FROM loginContainer TO signUpContainer (START)
$(document).ready(function(){
	$('.to_register').on('click', function(){
		$('.to_signup').addClass('switch');
	});
});
/*ROTATE FROM loginContainer TO signUpContainer (END)*/



/*ROTATE FROM loginContainer TO recoveryContainer (START)*/

/*ROTATE FROM loginContainer TO recoveryContainer (END)*/







/*LOGIN WITH SOCIAL MEDIA SITES (FACEBOOK START)*/


/* 1#
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{227999751083929}',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });

    FB.getLoginStatus(function(response){
      if (response.status === 'connected') {
        document.getElementById('status').innerHTML = 'Jus esate neprisijunges';
      }else if (response.status === 'not authorized') {
          document.getElementById('status').innerHTML = 'Prisijungete'
      }else {
          document.getElementById('status').innerHTML = 'Jus neprisijungete prie facebook'
      }
    });
  };

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

function login() {
  FB.login(function(response) {
    if (response.status === 'connected') {
        document.getElementById('status').innerHTML = 'Jus esate neprisijunges';
    }else if (response.status === 'not authorized') {
          document.getElementById('status').innerHTML = 'Prisijungete'
    }else {
          document.getElementById('status').innerHTML = 'Jus neprisijungete prie facebook'
    }
  });
}

1*/


  /*2
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{227999751083929}',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });
      
    

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });  

  };



  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response){
  if(response.status === 'connected'){
    console.log('Logged in and authenticated');
  }else{
    console.log('Not authenticated');
  }
}


2*/



/*This is reable name. Instead of 'response' you can write anything you whant*/
/*function logInFb() {
	FB.Login(function (response) {
		console.log(response);
	}, {scope: 'email, public_profile'})
}*/




/*paleidus su xampp meta error: Insecure Login Blocked: You can't get an access token or log in to this app from an insecure page.
 Try re-loading the page as https://*/
 /*paleidus is papkes ta pati faila meta error:Nepavyksta atverti nuorodos: Nuorodos domenas nėra įtrauktas į programėlės domenų sąrašą. 
 Programėlės nustatymuose, lauke Programėlės Domenai, pridėkite visus programėlės domenus ir subdomenus, ir jūs sėkmingai galėsite atidaryti šią nuorodą.*/

window.fbAsyncInit = function() {
    FB.init({
      appId            : '227999751083929',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12'
    });
    	FB.getLoginStatus(function (response){
    		if (response.status==='connect') {
    			document.getElementById('fb').innerHTML='Jūs prisijungėte';
    		}else if(response.status='not_authorized'){
    			document.getElementById('fb').innerHTML='Klaida. Patikrinkite savo prisijungimo duomenis';
    		}else{
    			document.getElementById('fb').innerHTML='Jūs neprisijungėte. Patikrinkite savo prisijungimo duomenis ir bandykite dar kartą';
    		}
    	});

    	FB.AppEvents.logPageView();

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  function login(){
  	FB.login(function(response){
  		if (response.status==='connect') {
    			document.getElementById('fb').innerHTML='Jūs prisijungėte';
    		}else if(response.status='not_authorized'){
    			document.getElementById('fb').innerHTML='Klaida. Patikrinkite savo prisijungimo duomenis';
    		}else{
    			document.getElementById('fb').innerHTML='Jūs neprisijungėte. Patikrinkite savo prisijungimo duomenis ir bandykite dar kartą';
    		}
  	}), {scope: 'email, public_profile'};
  }

/*LOGIN WITH SOCIAL MEDIA SITES (FACEBOOK END)*/








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