"use strict";
function SearchService($http, $location) {
  const self = this;
  self.state;
  self.gstate;
  //variable storing our promise
  self.glampresults;
  self.glampSite = null;
  self.gsiteCoord = null;
  //variable storing our objects
  //get method, called onclick in our search.html
  
  self.setGlamp = () => {
    return $http({
      method: "GET",
      url: `/glamp`   
    }).then(function(response) {
      self.glampresults = response.data;
      $location.path("/results");
      // console.log(self.glampresults);
      return self.glampresults;
    });
  };
  
  self.getGlamp = (sites) => {
    self.glampSite = sites;
    console.log(self.glampSite);
    $location.path("/detail");
    return self.glampSite;
  }
  self.glampDetails = () => {
    console.log(self.glampSite);
    return self.glampSite;
  }
  self.getGData = () => {
    return self.glampresults;
  };

  self.createGCoord = () => {
    self.gsiteCoord = [];
    for (let i = 0; i < self.glampresults.length; i++) {
      // console.log(self.glampresults[i]);
    self.GCoord = {
      lat: self.glampresults[i].lat,
      lng: self.glampresults[i].lng
    }
    self.gsiteCoord.push(angular.copy(self.GCoord));
    // console.log(self.gsiteCoord);
  }
    return self.gsiteCoord;
};
}
angular.module("App").service("SearchService", SearchService);