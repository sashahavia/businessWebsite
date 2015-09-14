$(document).ready(function () {
    var latlng = new google.maps.LatLng(40.645244,-73.9449976);
    console.log("I am here");
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
});