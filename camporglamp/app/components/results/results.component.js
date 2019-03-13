"use strict";
const results = {
  templateUrl: `app/components/results/results.html`,
  controller: [
    "SearchService",
    function(SearchService) {
      const vm = this;
      const scripts = document.querySelectorAll("script")
      console.log(scripts)
      vm.campresults = SearchService.getData();
      vm.siteCoord = SearchService.createCoord();
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
      vm.getDetails = function(site) {
        console.log(site)
        SearchService.setCamp(site);
        // SearchService.setAlerts(site.parkCode);
      }
      vm.initMap();
    }
  ]
};

angular.module("App").component("results", results);
