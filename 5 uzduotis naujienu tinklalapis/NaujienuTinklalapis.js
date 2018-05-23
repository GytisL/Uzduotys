/*===LOGINCONTAINER BAR START===*/
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
/*===LOGINCONTAINER BAR END===*/


/*===ROTATE FROM loginContainer TO signUpContainer (START)===
$(document).ready(function(){
	$('.to_register').on('click', function(){
		$('.to_signup').addClass('switch');
	});
});
/*===ROTATE FROM loginContainer TO signUpContainer (END)===*/



/*===ROTATE FROM loginContainer TO recoveryContainer (START)===*/

/*===ROTATE FROM loginContainer TO recoveryContainer (END)===*/


/*BANNER CHANGER (START)*/
/*var links = ["http://www.abc.com","http://www.def.com","http://www.ghi.com"];*/ //banner link from websites
var images = ["l2baneris-compressed.gif","l2-baneris-2.gif","l2-baneris-3.gif"];
var i = 0;
var renew = setInterval(function(){
  if(images.length == i){
    i = 0;
  }
  else {
  document.getElementById("bannerImage").src = images[i];
  /*document.getElementById("bannerLink").href = links[i];*/ //banner link from websites
    i++;
  }
},10000); //banners changes every 10 seconds
/*BANNER CHANGER (END)*/


/*===SMOOTH SCROLL ONCLICK (START)===*/

$(document).ready(function(){
  $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target); //objectifying # (a hash). Without this it will not work

    //Scroll and show hash
    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 2000, 'swing', function () {
      window.location.hash = target;
    });
    
    //Scroll and do not show hash
    $('html, body').animate({
      /*$('body, html').animate({css-property}, duration)*/
      'scrollTop': $target.offset().top -37 //-37 means that element stops 37px before the element.
    }, 2000, 'swing');
  });
});

/*$(document).ready(function(){
  var page_url = window.location.href;
  var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
  if (page_id == "section3") { //section3 is and id of an element
    $("html, body").animate({
      scrollTop: $("#scroll-" + page_id).offset().top -20 //element stops 20px before
    }, 1000);
  } else if (page_id == "post") {
    $("html, body").animate({
      scrollTop: $("#scroll-" + page_id).offset().top +10 //element stops 10px after
    }, 1000);
  }
});*/

/*===SMOOTH SCROLL ONCLICK (END)===*/









/*===LOGIN WITH SOCIAL MEDIA SITES (FACEBOOK START)===*/



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

/*window.fbAsyncInit = function() {
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
  }*/




/*===LOGIN WITH SOCIAL MEDIA SITES (FACEBOOK END)===*/








/*===SEARCHBOX BAR START===*/
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
/*===SEARCHBOX BAR END===*/



/*PARALLAX HOVER TILT EFFECT (START)

$('.hover').tilt({
    reset: false
})


$(".hover").hover3d({
  // selector for element
  selector      : null,
  // Perspective value for 3d space
  perspective   : 1000,
  // Mouse movement sensitivity
  sensitivity   : 20,
  // Default behavior is the element will follow the mouse, look like it facing the mouse
  invert        : false,
  // Add shining layer
  shine       : false,
  // Helper class when mouse hover in the element
  hoverInClass  : "hover-in",
  // Helper class when mouse hover Out the element
  hoverOutClass : "hover-out",
  // Helper class when the mouse is hovering the element
  hoverClass    : "hover-3d"
});


/*PARALLAX HOVER TILT EFFECT (END)*/



/*COOKIE CONSET PART (START)*/
$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    });
});
/*COOKIE CONSET PART (END)*/

/*WRITING A COOKIE (START)
cookie_name = "Basic_Cookie";
  function write_cookie() {
    if(document.cookie) {
      index = document.cookie.indexOf(cookie_name);
    } else {
      index = -1;
    }
    if (index == -1) {
        document.cookie=cookie_name+"=1; expires=Wednesday, 01-Aug-2040 08:00:00 GMT";
    } else {
        countbegin = (document.cookie.indexOf("=", index) + 1);
        countend = document.cookie.indexOf(";", index);
        if (countend == -1) {
          countend = document.cookie.length;
        }
        count = eval(document.cookie.substring(countbegin, countend)) + 1;
        document.cookie=cookie_name+"="+count+"; expires=Wednesday, 01-Aug-2040 08:00:00 GMT";
    }
}
WRITING A COOKIE (END)*/

/*READING A COOKIE (START)
function gettimes() {
  if(document.cookie) {
    index = document.cookie.indexOf(cookie_name);
    if (index != -1) {
      countbegin = (document.cookie.indexOf("=", index) + 1);
      countend = document.cookie.indexOf(";", index);
    if (countend == -1) {
      
    }
      count = document.cookie.substring(countbegin, countend);
    if (count == 1) {
      return (count+" time");
    } else {
      return (count+" times");
    }
    }
  }
    return ("0 times");
}
READING A COOKIE (END)*/


