$(document).ready(function(){
	 $(".foo").backstretch(
	 	[
	 		"img/paris1.jpg",
	 		"img/paris2.jpg",
	 		"img/paris3.jpg"
	 	], {
	 		duration: 3000,
	 		fade: 750});	
});

$('container').flowtype({
 minimum   : 500,
 maximum   : 1200,
 minFont   : 12,
 maxFont   : 40,
 fontRatio : 30
});