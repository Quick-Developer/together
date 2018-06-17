//import WeathersRepository from './weather-repository.js'; 
//import GoogleMaps from 'mymodule'
import GoogleMaps from './google-maps.js'
//import GoogleMaps from './google-maps.js'
let googleMaps = new GoogleMaps();


/*var map;
var marker;

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(40.680898,-8.684059),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var geocoder = new google.maps.Geocoder();
    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
      });
}

google.maps.event.addDomListener(window, 'load', initialize);


function searchAddress() {

	var addressInput = document.getElementById('address').value;

	var geocoder = new google.maps.Geocoder();

	geocoder.geocode({address: addressInput}, function(results, status) {

		if (status == google.maps.GeocoderStatus.OK) {

      var myResult = results[0].geometry.location;

      createMarker(myResult);

      map.setCenter(myResult);

      map.setZoom(17);
		}
	});

}

function createMarker(latlng) {

  if(marker != undefined && marker != ''){
    marker.setMap(null);
    marker = '';
  }

  marker = new google.maps.Marker({
    map: map,
    position: latlng
  });
}




 function initMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
    var a = results[0].address_components[0].long_name;
    var c = results[0].address_components[1].long_name;
    var b = results[0].address_components[2].long_name;
      resultsMap.setCenter(results[0].geometry.location);
      map.setZoom(17);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
        title: b
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}*/
 



/* var geocoder = new google.maps.Geocoder();
geocoder.geocode( { "address": "Brussels" }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
        var location = results[0].geometry.location,
            lat      = location.lat(),
            lng      = location.lng();
      alert("Latitude: " + lat);
      alert("Longitude: " + lng);
    }
}); */