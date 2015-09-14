$(document).ready(function(){
	//console.log("proposal");
	var firstChoice = "";
	var webChoice = "";
	var storeChoice = "";
	var wordChoice = "";
	//console.log("This is first Choice "+ webFirstChoice);

	// Project Type selection
	$("#project_type").on("change", function(){
		firstChoice = $(this).val();
		//console.log(webFirstChoice);
		checkValue();
		//checkValue( $(this).val() );
	});

	function checkValue(){
		if( firstChoice == "type1" ){
			//console.log("correct");	
			$("#choice2").show();
		}else if( firstChoice == "type2" ){
			$("#choice3").show();
		}else if( firstChoice == "type3" ){
			$("#choice4").show();
		}
		
	}
	//
	$("#project_pages").on("change", function(){
		webChoice = $(this).val();
		checkValueWeb(webChoice);
	});

	$("#project_products").on("change", function(){
		storeChoice = $(this).val();
		checkValueWeb(storeChoice);
	});

	$("#project_word").on("change", function(){
		wordChoice = $(this).val();
		checkValueWeb(wordChoice);
	});

	function checkValueWeb(data){
		if(data != ""){
			$("#choice5").show();
		}

	}

	

});