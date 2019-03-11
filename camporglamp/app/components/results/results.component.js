"use strict";
const results = {
  templateUrl: `app/components/results/results.html`,
  controller: ['SearchService', function (SearchService) {
    const vm = this;
    vm.results = SearchService.getData()
    vm.campresults = vm.results;
    vm.siteCoord = SearchService.createCoord();

    // vm.siteCoord(vm.results);

    vm.initMap = function () {
      vm.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 12, lng: -12 },
        zoom: 12
      })
    };
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

