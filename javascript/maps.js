
function initMapSheffield() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 29.5895, lng: 106.583},

        scrollwheel: false,
        zoom: 14
    });

    var myLatlng = new google.maps.LatLng(29.5892,106.585);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"We're here!"
    });

}

