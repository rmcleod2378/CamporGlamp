"use strict";
function SearchService($http, $location) {
  const key = "OP2F1MT0eeFGORzUkOdqULyY1Ed9dB9hdDiFIlD8";
  const self = this;
  self.campresults = null;
  self.get = function() {
    return $http({
      method: "GET",
      url: `https://api.nps.gov/api/v1/campgrounds?stateCode=MI&limit=5&api_key=${key}`
    }).then(function(response) {
      self.campresults = response.data.data;
      $location.path("/results");
      return self.campresults;
    });
  };
  self.getData = () => {
    return self.campresults;
  };
}

angular.module("App").service("SearchService", SearchService);
