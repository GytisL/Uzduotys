/*SEARCH-BOX TOGGLE*/
$(document).ready(function(){
	$(".active").click(function(){
		$(".search-box").toggle();
		$("input[type='text']").focus();
	});
});
/*SEARCH-BOX END*/

