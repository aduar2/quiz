$(document).ready(function(){
	$("#quiz").click(function(event){
		//TODO FIX QUESTIONS GREATYER THAN 9!!!
		var number=event.target.id.slice(-1):
		$("#a"+number).slideDown("slow");
	});
});
