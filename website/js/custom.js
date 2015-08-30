$(document).ready(function(){
	
	
    
	$(window).scroll(function(){
		var window_top = $(window).scrollTop();
    	var div_top = $('#sticky_anchor').offset().top;
    	console.log(window_top);
		console.log(window_top);
		if (window_top > div_top) {
			
	    	//console.log("I am in sticky_relocate");
	        $("#nav").addClass("sticky");
	    } else {
	    	console.log("I am not");
	        $("#nav").removeClass("sticky");
	    }
	});
/********************Recent Projects********************************/
	
	$("img").on({
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