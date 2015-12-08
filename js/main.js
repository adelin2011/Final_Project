$(document).ready(function(){
	 $(".background").backstretch("img/paris2.jpg");	
});

$('#container').flowtype({
 minimum   : 500,
 maximum   : 1200,
 minFont   : 15,
 maxFont   : 20,
 fontRatio : 20,
});

jQuery(document).ready(function () {
    	jQuery('nav').meanmenu();
    });


$(document).ready(function() {

	/* Apply fancybox to multiple items */
	
	$(".fancy").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});