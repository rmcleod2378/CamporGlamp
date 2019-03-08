"use strict";
const results = {
  templateUrl: `app/components/results/results.html`,
  controller: ['MapService', function (MapService) {
    const vm = this;
    vm.map;
    MapService.campSearch().then((data) => {
      self.jsonPayload = data;
      return self.jsonPayload;
    });
    vm.initMap = function() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
  }]
};


angular
  .module("App")
  .component("results", results);

