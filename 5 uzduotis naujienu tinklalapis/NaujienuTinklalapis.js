/*SEARCH-BOX TOGGLE*/
$(document).ready(function(){
	$(".active").click(function(){
		$(".search-box").toggle();
		
	});
});
/*SEARCH-BOX END*/

/*LOGINCONTAINER BAR PART*/
$(document).ready(function(){
	$(".logInbar").click(function(){
		$("#loginContainer").toggle();
		$("input[type='text']").focus();
	});
});

/*LOGINCONTAINER BAR END*/
