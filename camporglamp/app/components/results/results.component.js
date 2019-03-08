"use strict";
const results = {
  templateUrl: `app/components/results/results.html`,
  controller: ['$scope', function ($scope) {
    const vm = this;
    // vm.lat = 42.3314;
    // vm.lng = -83.0458;

    // vm.mapOptions = {
    //   zoom: 14,
    //   center: new google.maps.LatLng(vm.lat, vm.lng),
    //   // mapTypeId: google.maps.MapTypeId.STREET
    // }
    // vm.map = new google.maps.Map(document.getElementById('map'), vm.mapOptions);
    vm.map;
    vm.infoWindow;
    vm.initMap = function () {
      vm.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 12, lng: -12 },
        zoom: 12
      });

      vm.infoWindow = new google.maps.InfoWindow;

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        console.log("hello");

        navigator.geolocation.getCurrentPosition(function (position) {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log("hi");

          vm.infoWindow.setPosition(pos);
          vm.infoWindow.setContent('Location found.');
          vm.infoWindow.open(map);
          vm.map.setCenter(pos);
        },

        function () {
          console.log("work");
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
        console.log("not workign");
      }
    }

    vm.initMap();

    // var cities = "Atlanta, USA";
    // var geocoder = new google.maps.Geocoder();

    // $scope.markers = [];

    // var createMarker = function (info) {
    //   var marker = new google.maps.Marker({
    //     map: $scope.map,
    //     position: new google.maps.LatLng(info.lat(), info.lng())
    //   });
    // }

    // geocoder.geocode({ 'address': cities }, function (results, status) {
    //   if (status == google.maps.GeocoderStatus.OK) {
    //     newAddress = results[0].geometry.location;
    //     $scope.map.setCenter(newAddress);
    //     createMarker(newAddress)
    //   }
    // });
  }]
};


angular
  .module("App")
  .component("results", results);

