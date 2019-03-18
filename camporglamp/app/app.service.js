"use strict";
function SearchService($http, $location) {
    // our NPS API key
  const key = "OP2F1MT0eeFGORzUkOdqULyY1Ed9dB9hdDiFIlD8";
  const self = this;
  self.state;
  self.gstate;
  self.parkcode;
  //variable storing our promise
  self.campresults = null;
  self.glampresults;
  self.glampSite = null;
  self.gsiteCoord = null;
  //variable storing our objects
  self.siteCoord = null;
  //get method, called onclick in our search.html

  self.campSite = null;
  self.alertresults = null;


  self.get = () => {
    return $http({
      method: "GET",
      url: `/camp`   
    }).then(function(response) {
      self.campresults = response.data;
      console.log(self.campresults);
      $location.path("/camp-results");
      return self.campresults;
    });
  };
  self.setCamp = (site) => {
    self.campSite = site;
    console.log(self.campSite);
    $location.path("/camp-details");
    return self.campSite;
  }
  self.getCamp = () => {
      return self.campSite;
  }
  self.getCData = () => {
    return self.campresults;
  };
  
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
  //this method is called in our results component, it takes the latlong string from each object in our
  //promise. 
  self.createCoord = () => {
    self.siteCoord = [];
    for (let i = 0; i < self.campresults.length; i++) {
        self.Coord = {
          lat: self.campresults[i].lat,
          lng: self.campresults[i].lng
        };
        self.siteCoord.push(angular.copy(self.Coord));
        console.log(self.siteCoord);
      }
      return self.siteCoord;
    }
};

angular.module("App").service("SearchService", SearchService);
