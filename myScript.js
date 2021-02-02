$(document).ready(function() {
	$("a1").hide();
	$("a2").hide();
	$("a3").hide();
	$(“#q1”).click(function() {
		$(“#a1”).toggle();
	});

  $(“#q2”).click(function() {
		$(“#a2”).toggle();
	});

	$(“#q3”).click(function() {
		$(“#a3”).toggle();
	});

});
