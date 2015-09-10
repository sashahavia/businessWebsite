$(document).ready(function(){
	console.log("proposal");
	var firstChoice = "";
	answers();
	console.log("This is first Choice "+ firstChoice);

	function answers(){
		checkValue();
		console.log("I am in answers");
  		$("#fChoice :selected").text(); //the text content of the selected option
		firstChoice = $("#fChoice").val(); //the value of the selected option
		console.log("This is first Choice "+ firstChoice);
	}

	function checkValue(){
		setTimeout( function(){
			if( fChoice == ""){
				
					checkValue();	
				
			}else{
				//Game end
			}
		}, 1000);
	}
	

});