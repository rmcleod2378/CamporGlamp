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


  self.get = (state) => {
    self.state = state;
    return $http({
      method: "GET",
      url: `https://api.nps.gov/api/v1/campgrounds?stateCode=
      MI&limit=50&api_key=${key}`
    }).then(function(response) {
      self.campresults = response.data.data;
      $location.path("/camp-results");
      console.log(self.campresults);
      return self.campresults;
    });
  };
  //this is called in results component
  self.getData = () => {
    return self.campresults;
  };

  self.setCamp = (site) => {
    self.campSite = site;
    let parkCode = site.parkCode;
    return $http({
      method: "GET",
      url:`https://api.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key=${key}`
    }).then(function(response) {
      self.alertresults = response.data.data[0];
      console.log(self.alertresults);
      $location.path("/camp-details");
      return self.alertresults;
    });
  }
  self.getCamp = () => {
      return self.campSite;
  }
  self.getAlerts = () => {
    return self.alertresults;
  }
  
  self.setGlamp = () => {
    return $http({
      method: "GET",
      url: `/glamp`   
    }).then(function(response) {
      self.glampresults = response.data;
      $location.path("/glamp-results");
      // console.log(self.glampresults);
      return self.glampresults;
    });
  };
  
  self.getGlamp = (sites) => {
    self.glampSite = sites;
    console.log(self.glampSite);
    $location.path("/glamp-details");
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
      if (!self.campresults[i].latLong) {
        continue;
      }
      self.latlong = self.campresults[i].latLong;
      self.split = self.latlong.split(" ");
      // console.log(self.split);
      for (let j = 0; j < 1; j++) {
        self.len1 = self.split[j].length;
        self.len2 = self.split[j + 1].length;
        self.str1 = self.split[j].substr(5, self.len1);
        self.str2 = self.split[j + 1].substr(4, self.len2);
        self.num1 = parseFloat(self.str1);
        self.num2 = parseFloat(self.str2);
        self.coordinates = {
          lat: self.num1,
          lng: self.num2
        };
        self.siteCoord.push(angular.copy(self.coordinates));
      }
    }
    // console.log(self.siteCoord);
    return self.siteCoord;
  };
}

angular.module("App").service("SearchService", SearchService);
