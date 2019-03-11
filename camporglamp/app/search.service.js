"use strict";
function SearchService($http, $location) {
  const key = "OP2F1MT0eeFGORzUkOdqULyY1Ed9dB9hdDiFIlD8";
  const self = this;
  self.campresults = null;
  self.siteCoord = null;
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
  self.createCoord = function() {
    self.siteCoord = [];
    for (let i = 0; i < self.campresults.length; i++) {
      self.latlong = self.campresults[i].latLong;
      self.split = self.latlong.split(" ");
      // console.log(self.split);
      for (let j = 0; j < 1; j++) {
        self.str1 = self.split[j].substr(5, 8);
        self.str2 = self.split[j + 1].substr(4, 8);
        self.num1 = parseFloat(self.str1);
        self.num2 = parseFloat(self.str2);
        self.coordinates = {
          lat: self.num1,
          lng: self.num2
        };
        self.siteCoord.push(angular.copy(self.coordinates));
      }
    }
    console.log(self.siteCoord);
    return self.siteCoord;
  };
}

angular.module("App").service("SearchService", SearchService);
