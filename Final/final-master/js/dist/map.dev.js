"use strict";

(function () {
  'use strict';

  var mapElement = document.getElementById('map');
  var place = {
    lat: 49.993254,
    lng: 36.234925
  };
  var map = new google.maps.Map(mapElement, {
    zoom: 16,
    center: place
  });
  var marker = new google.maps.Marker({
    position: place,
    map: map,
    icon: "img/map-marker.png",
    title: "IT Place"
  });
  var info = new google.maps.InfoWindow({
    content: '<h4>Тут я навчався в Beetroot Academy</h4>'
  });
  marker.addListener('click', function () {
    info.open(mapElement, marker);
  });
})();