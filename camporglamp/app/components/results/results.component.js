"use strict";
const results = {
  templateUrl: `app/components/results/results.html`,
  controller: ['$scope', function ($scope) {
    const vm = this;
    $scope.mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(42.3314, -83.0458),
      // mapTypeId: google.maps.MapTypeId.STREET
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), $scope.mapOptions);

    var cities = "Atlanta, USA";
    var geocoder = new google.maps.Geocoder();

    $scope.markers = [];

    var createMarker = function (info) {
      var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(info.lat(), info.lng())
      });
    }

    geocoder.geocode({ 'address': cities }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        newAddress = results[0].geometry.location;
        $scope.map.setCenter(newAddress);
        createMarker(newAddress)
      }
    });
  }]
};


angular
  .module("App")
  .component("results", results);

