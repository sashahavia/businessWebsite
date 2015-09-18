$(document).ready(function(){
	//console.log("proposal");
	var firstChoice = "";
	var webChoice = "";
	var storeChoice = "";
	var wordChoice = "";
	var timeChoice = "";
	var lastChoice = "";
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

	$("#project_time").on("change", function(){
		timeChoice = $(this).val();
		showPriority(timeChoice);
	});

	function showPriority(data){
		if( data != ""){
			$("#choice6").show();
		}
	}

	$("#project_priority").on("change", function(){
		lastChoice = $(this).val();
		showCalculate(lastChoice);
	});

	function showCalculate(data){
		if( data != ""){
			$("#calculate").show();
		}
	}

	$("#submit_estimate").click(function(){
		$("#content").hide();
		$("#options").show();
	});

	// Contact Form Proposal

	var emailP = "";
    var nameP = "";
    var messageP = "";
    $("#submitP").click(function(){
        //console.log("CLICK WORKS");
        nameP = $("#nameP").val();
        emailP = $("#emailP").val();
        messageP = $("#messageP").val();

        namePValid = validate( "name", nameP );

        if( namePValid ){
        	emailPValid = validate( "email", emailP );
			if( emailPValid ){
				//console.log("moving to message");
				messagePValid = validate("name", messageP);
				if( messagePValid ){
					//console.log("Matching passwords??");
					$("#contactProposal").submit();
				}else{
					alert("Please enter your message");
				}
			}else{
				alert("Sorry invalid email ");
			}
		}else{
			alert("Please enter your name");
        }
    });

    function validate(dataType, data){
        var result = false;

        if(data != ""){
            //console.log("Continue Validation");
            switch(dataType){
                case "email":
                    //validate email
                    //find @
                    if(data.indexOf('@') != -1){
                        //console.log("The @ found");
                        result = true;
                        if(data.indexOf('.') != -1){
                            //console.log("valid");
                            result = true;
                        }else{
                            //console.log("inavlid email");
                            result = false;
                        }
                    }else{
                        //console.log(" No @ was found, invalid email");
                        result = false;
                    }
                    break;
                case "name":
                    //validate password
                    if(data.length > 2){
                        //valid
                        result = true;
                    }else{
                        //valid
                        result = false;
                    }
                    break;
            }
        }else{
            //console.log( "No data provided!");
            result = false;
        }
        return result;
    }


	

});