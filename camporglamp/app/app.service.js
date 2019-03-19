"use strict";

function SearchService($http, $location) {
  const self = this;
  self.state;
  self.gstate;
  self.faveArray = []; //array where sites that are faved are pushed
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
    }).then(function (response) {
      self.glampresults = response.data;
      $location.path("/results");
      // console.log(self.glampresults);
      return self.glampresults;
    });
  };

  self.getGlamp = (sites) => {
    self.glampSite = sites;
    // console.log(self.glampSite);
    $location.path("/detail");
    return self.glampSite;
  }
  self.glampDetails = () => {
    // console.log(self.glampSite);
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

  //this checks to see if an item exists in our faveArray, prior to pushing it - pushes one of each item
  self.addFave = (sites) => {
    self.glampSite = sites;
    console.log("hi")
    self.faveArray.push(sites)
    $location.path("/favorite");
    
  //   for (let i = 0; i < self.faveArray.length; i++) {
  //     if (sites == self.faveArray[i]) {
  //       return;
  //     }
  //   }
  //   self.faveArray.push(sites)
  }

  self.getFave = (sites) => {
    self.glampSite = sites;
    // console.log(self.faveArray);
    // $location.path("/favorite");
    return self.faveArray;
  }
  //returns fave array
  // self.getFave = () => {
  //   console.log("hello")
  //   $location.path("/favorite");
  //   return self.faveArray;
  // }
  // //deletes an item from fave array
  // self.deleteFave = (newArray) => {
  //   self.faveArray = newArray;
  // }
  // //allows user to delete from array while navigating the initial search results by on/off click of favorite icon
  // self.deleteTempFav = (item) => {
  //   for (let i = 0; i < self.faveArray.length; i++) {
  //     if (item == self.faveArray[i]) {
  //       self.faveArray.splice(i, 1);
  //     }
  //   }
  // }

}
angular.module("App").service("SearchService", SearchService);