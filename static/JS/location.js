// Excerpt from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
function geoFindMe() {
    if (!navigator.geolocation){
     console.log("Geolocation is not supported by your browser");
     alert("Geolocation is not supported by your browser");
      return;
    }
    function success(position) {
      latitude  = position.coords.latitude;
      longitude = position.coords.longitude;
      //reverseGeocodingWithGoogle(longitude, latitude)
      return {latitude, longitude}
    }
    function error() {
      console.log("Unable to retrieve your location");
      alert("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }

/*function reverseGeocodingWithGoogle(latitude, longitude) {
fetch(`https://maps.googleapis.com/maps/api/geocode/json?
    latlng=${latitude},${longitude}&key={GOOGLE_MAP_KEY}`)
.then( res => res.json())
.then(response => {
    console.log("User's Location Info: ", response)
    })
    .catch(status => {
    console.log('Request failed.  Returned status of', status)
    })
}*/ 


//https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
function getDistanceFromLatLonInKm(lat, lon) {
    if (typeof latitude == "undefined"){
        alert("Unable to retrieve your location");
    }
    else{
        var R = 6378.1; // Radius of the earth in km
        var dLat = deg2rad(lat-latitude);  // deg2rad below
        var dLon = deg2rad(lon-longitude); 
        var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(latitude)) * Math.cos(deg2rad(lat)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d; 
    }
}
  
function deg2rad(deg) {
    return deg * (Math.PI/180)
}

function distanceInput(){
    var input = document.getElementById("distance")
    input.onchange = function() { 
        refresh()
    };  
}

function restoDistance(resto){
    var value = document.getElementById("distance").value
    var distance = getDistanceFromLatLonInKm(resto.getAttribute('data-lat'), resto.getAttribute('data-lon'))
    if (distance > value){
        return false;
    }
    else{
        return true;
    }
}

var latitude;
var longitude;
geoFindMe()
distanceInput()