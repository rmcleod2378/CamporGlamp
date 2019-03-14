"use strict";
const campResults = {
  templateUrl: `app/components/campResults/campResults.html`,
  controller: [
    "SearchService",
    function(SearchService) {
      const vm = this;
      vm.campresults = SearchService.getData();
      vm.siteCoord = SearchService.createCoord();
      // draws map for campsites
      vm.initMap = function() {
        vm.map = new google.maps.Map(document.getElementById("map"), {
          center: vm.siteCoord[0],
          zoom: 9
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