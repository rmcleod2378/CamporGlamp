"use strict";
const campResults = {
  templateUrl: `app/components/campResults/campResults.html`,
  controller: [
    "SearchService",
    function(SearchService) {
      const vm = this;
      vm.campresults = SearchService.getData();
      vm.siteCoord = SearchService.createCoord();


      const map = angular.element(document.querySelector("#map"));
      const results = angular.element(document.querySelector(".results"));
      const fixedRight = angular.element(document.querySelector(".fixedRight"));
      const fixedLeft = angular.element(document.querySelector(".fixedLeft"));
      vm.showMap = function() {
          map.css("display", "flex");
          fixedLeft.css("display", "flex");
          fixedRight.css("display", "none");
          results.css("display", "none");
      }
      vm.showResults = function() {
          map.css("display", "none");
          fixedLeft.css("display", "none");
          fixedRight.css("display", "flex");
          results.css("display", "flex");
       }



      // draws map for campsites
      vm.initMap = function() {
        vm.map = new google.maps.Map(document.getElementById("map"), {
          center: vm.siteCoord[0],
          zoom: 6
        });
        for(let i = 0; i < vm.siteCoord.length; i++){
          if(vm.siteCoord[i].lat) {
            console.log("Good Coords");
            vm.marker = new google.maps.Marker({
              position: vm.siteCoord[i],
              map: vm.map,
              title: vm.campresults[i].name
            });
          }
          else { 
          }
        }
      };
      // get campsites' details
      vm.getDetails = function(site) {
        console.log(site)
        SearchService.setCamp(site);
      }
      vm.initMap();
    }
  ]
};

angular.module("App").component("campResults", campResults);
