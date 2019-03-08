"use strict";

function MapService($http) {
  const self = this
  self.jsonPayload = null;
  self.campSearch = () => {
    return $http({
      method: "GET", 
      url: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDF6p7FK63oG_e_XmeQybRKRKfB8qG6SEU&callback=initMap` 
    })
  };
}

angular
  .module("App")
  .service("MapService", MapService);