"use strict";

function SearchService($http, $location) {
  const self = this;
  self.state;
  self.gstate;
  self.faveArray = []; //array where sites that are faved are pushed
  //variable storing our promise  
  self.glampresults;
  self.wintercampresults;
  self.winterglampresults;
  self.glampSite = null;
  self.gsiteCoord = null;
  self.faveSite;
  //variable storing our objects
  //get method, called onclick in our search.html
  self.setGlamp = () => {
    return $http({
      method: "GET",
      url: `/glamp`
    }).then(function (response) {
      self.glampresults = response.data;
      $location.path("/results");
      return self.glampresults;
    });
  };

  self.getGlamp = (sites) => {
    self.glampSite = sites;
    $location.path("/detail");
    return self.glampSite;
  }
  self.glampDetails = () => {
    return self.glampSite;
  }
  self.getGData = () => {
    return self.glampresults;
  };

  self.createGCoord = () => {
    self.gsiteCoord = [];
    for (let i = 0; i < self.glampresults.length; i++) {
      self.GCoord = {
        lat: self.glampresults[i].lat,
        lng: self.glampresults[i].lng
      }
      self.gsiteCoord.push(angular.copy(self.GCoord));
    }
    return self.gsiteCoord;
  };
  //this checks to see if an item exists in our faveArray, prior to pushing it - pushes one of each item
  self.addFave = (sites) => {
    console.log(sites) 
    for (let i = 0; i < self.faveArray.length; i++) {
      if (sites.id == self.faveArray[i].id) {
        return;
      }        }
    self.faveArray.push(sites);
    $location.path("/favorite");      
    }
     //returns fave array from delete method in favorite component
  self.getFave = (sites) => {
    self.faveSite = sites;
    return self.faveArray;
  }
 
  //deletes an item from fave array
  self.deleteFave = (newArray) => {
    self.faveArray = newArray;
  }
//allows user to delete from array while navigating the initial search results by on/off click of favorite icon
  self.deleteTempFav = (sites) => {
    for (let i = 0; i < self.faveArray.length; i++) {
      if (sites == self.faveArray[i]) {
        self.faveArray.splice(i, 1);
      }
    }
  }
// ############ GoT Easter Egg #################
  self.setWinterCamp = () => {
    return $http({
      method: "GET",
      url: `/wintercamp`
    }).then(function (response) {
      self.wintercampresults = response.data;
      $location.path("/winterdetails");
      return self.wintercampresults;
    });
  };

  self.getWinterCamp = () => {
    return self.wintercampresults
  }

  self.setWinterGlamp = () => {
    return $http({
      method: "GET",
      url: `/winterglamp`
    }).then(function (response) {
      self.winterglampresults = response.data;
      $location.path("/winterdetails");
      return self.winterglampresults;
    });
  };

  self.getWinterGlamp = () => {
    return self.winterglampresults
  }

}
angular.module("App").service("SearchService", SearchService);