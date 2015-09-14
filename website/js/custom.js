$(document).ready(function(){

	$(window).scroll(function(){
		var window_top = $(window).scrollTop();
    	var div_top = $('#sticky_anchor').offset().top;
    	//console.log(window_top);
		// console.log(window_top);
		if (window_top > div_top) {
	    	//console.log("I am in sticky_relocate");
	        $("#nav").addClass("sticky");
	        
	    } else {
	    	// console.log("I am not");
	        $("#nav").removeClass("sticky");
	    }

	});

	writeText();
/*******************Animate Text**********************/
function writeText(){
	var str = "Wide range of design and development services provided with a personal experience.";
	var spans = '<b>' + str.split(/\s+/).join(' </b><b>') + '</b>';
	// console.log("Count spans " + )
	$(spans).hide().appendTo("#text").each(function(i) {
		$(this).delay(1000 * i).fadeIn();
		console.log("writeText" + i);	
	});
	repeatText();
}

function repeatText(){
	setTimeout( function(){
		console.log("I am in repeatText function");
		$("#text").empty();
		writeText();
	}, 12000);
}

/********************Recent Projects********************************/
	
	$("#work img").on({
    'mouseover' : function() {
    	var picturePath = $(this).attr("src").split("_");
      	picturePath[0] = picturePath[0] + ".jpg";
      	$(this).attr('src', picturePath[0]);
      	picturePath[0] = 0;
    },
    'mouseout': function() {
    	var picturePath2 = $(this).attr("src").split(".");
    	picturePath2[0] = picturePath2[0] + "_black.jpg";
  		$(this).attr('src', picturePath2[0]);
  		picturePath2[0] = 0;
    	}

 	 });

});