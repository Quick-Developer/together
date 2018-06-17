/**
 * @class 
 */

class GoogleMaps {

    constructor () {
        this.map = new google.maps.Map(document.getElementById('map-canvas'), {
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                mapTypeId: google.maps.MapTypeId.HYBRID
              },
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            rotateControl: true,
            zoom: 8,
            center: new google.maps.LatLng(51.508742, -0.120850)
        });
        this.marker = new google.maps.Marker({
            map: this.map,
            position: {lat: 51.508742, lng: -0.120850}
        });
        this.geocoder = new google.maps.Geocoder();
    }
    initalizeMap() {
    //   var map= google.maps.Map(document.getElementById('map-canvas'), this.map)
        /* var mapOptions = {
            center: new google.maps.LatLng(40.680898, -8.684059),
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        var geocoder = new google.maps.Geocoder();
        document.getElementById('submit').addEventListener('click', function () {
            geocodeAddress(geocoder, map);
        }); */ 
    }
}
export default GoogleMaps;
//export default GoogleMaps