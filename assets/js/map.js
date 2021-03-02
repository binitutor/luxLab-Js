$(function(){
  const map = $('#map');
  const street = $('#street');

  $(document).ready(function(){
    map.show();
    initMap();

    street.show();
    initStreetView();
  });

  // Initialize and add street view map
  function initStreetView() {
    // The location to load the street view at
    const manassasMall = {lat: 38.7774855, lng: -77.5044267};
    const streetDiv = document.getElementById('street');
    const panorama = new google.maps.StreetViewPanorama(
      streetDiv, {
        position: manassasMall
      });
  }

  // Initialize and add the map
  function initMap() {
    // The location to load the map at
    const manassasMall = {lat: 37.7575, lng: -122.4377};
    // The map, centered at manassas mall
    const map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: manassasMall});
    // The marker, positioned at manassas mall
    const marker = new google.maps.Marker({position: manassasMall, map: map});
  }
});

