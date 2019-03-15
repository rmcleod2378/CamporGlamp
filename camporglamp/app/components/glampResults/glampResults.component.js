"use strict";
const glampResults = {
  templateUrl: `app/components/glampResults/glampResults.html`,
  controller: ["SearchService", function(SearchService) {
      const vm = this;
      vm.glampresults = SearchService.getGData();
      vm.gsiteCoord = SearchService.createGCoord();

      // draws map for glampsites
      vm.initMap = function() {
        vm.map = new google.maps.Map(document.getElementById("map"), {
          center: vm.gsiteCoord[0],
          zoom: 9
        });
        for(let i = 0; i < vm.gsiteCoord.length; i++){
          if(vm.gsiteCoord[i].lat) {
            console.log("Good Coords");
            vm.marker = new google.maps.Marker({
              position: vm.gsiteCoord[i],
              map: vm.map,
              title: vm.glampresults[i].name
            });
          }
          else { 
          }
        }
      };
      //get glampsites' details
      vm.getDetails = function(sites) {
        console.log(sites)
        SearchService.getGlamp(sites);
      }
      vm.initMap();
    }
  ]
};

angular.module("App").component("glampResults", glampResults);
