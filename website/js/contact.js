$(document).ready(function () {
    var latlng = new google.maps.LatLng(40.645244,-73.9449976);
    //console.log("I am here");
    var styles = [
        {
            featureType: "landscape",
            stylers: [
                        { color: '#f9f1e6' },
                        { saturation: -70 }
                    ]
                },{
                    featureType: "natural",
                    stylers: [
                        { hue: '#191919' },
                        { saturation: -100 }
                    ]
                },{
                    featureType: "road",
                    stylers: [
                        { hue: '#191919' },
                        { saturation: -200 }
                    ]
                },{
                    featureType: "building",
                    elementType: "labels",
                    stylers: [
                        { hue: '#f21827' },
                        { saturation: -70 }
                    ]
                },{
                    featureType: "poi", //points of interest
                    stylers: [
                        { hue: '#959698' },
                        { saturation: -100 }
                    ]
                }
            ];
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            styles: styles
        };
        map = new google.maps.Map(document.getElementById('map'), myOptions);

// Form Validation

    var email = "";
    var name = "";
    var subject = "";
    var message = "";
    $("#submit").click(function(){
        //console.log("CLICK WORKS");
        name = $("#name").val();
        email = $("#email").val();
        
        console.log($('input[name="topic"]:checked').serialize());

        $('input[name="topic"]:checked').each(function() {
           console.log(this.value); 
           subject = $(this).val();
           console.log(subject); 
        });

        emailValid = validate( "email", email );

        if( emailValid ){
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
                    if(data.length >= 6){
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