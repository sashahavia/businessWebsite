$(document).ready(function(){
	console.log("proposal");
	var firstChoice = "";
	
	console.log("This is first Choice "+ firstChoice);

	$("#project_type").on("change", function(){
		fChoice = $(this).val();
		console.log(fChoice);
		checkValue();

		//checkValue( $(this).val() );
	});

	function checkValue(){
			if( fChoice == "type1" ){
					console.log("correct");	
					$("#choice2").show();
			}else{
				//Game end
			}
		
	}

	

});