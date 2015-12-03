$(document).ready(function(){
	 $(".background").backstretch(
	 	[
	 		"img/paris1.jpg",
	 		"img/paris2.jpg",
	 		"img/paris3.jpg"
	 	], {
	 		duration: 3000,
	 		fade: 750});	
});

$('#container').flowtype({
 minimum   : 300,
 maximum   : 1200,
 minFont   : 15,
 maxFont   : 20,
 fontRatio : 20
});