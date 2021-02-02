$(document).ready(function() {
	$(".a").hide();
	$("#q1").click(function() {
		$("#a1").toggle();
		$("p").css({"color":"red", "background-color": "yellow"})
	});

 	$("#q2").click(function() {
		$("#a2").toggle();
	});

	$("#q3").click(function() {
		$("#a3").toggle();
	});

});
