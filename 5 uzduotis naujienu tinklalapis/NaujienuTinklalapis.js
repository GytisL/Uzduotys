/*SEARCH-BOX TOGGLE*/
$(document).ready(function(){
	$(".active").click(function(){
		$(".search-box").toggle();
		event.preventDefault(); /*Prevents default behavior. Prevents from jumping to the top. */
	});
});
/*SEARCH-BOX END*/

/*LOGINCONTAINER BAR PART*/
$(document).ready(function(){
	$(".logInbar").click(function(){
		$("#loginContainer").toggle();
		$("input[type='text']").focus();
		event.preventDefault();
	});
});

/*LOGINCONTAINER BAR END*/
