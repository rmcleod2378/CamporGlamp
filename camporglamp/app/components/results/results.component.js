"use strict";
const results = {
  templateUrl: `app/components/results/results.html`,
  controller: [
    "SearchService",
    function(SearchService) {
      const vm = this;
      // const scripts = document.querySelectorAll("script")
      // console.log(scripts)
      vm.campresults = SearchService.getData();
      vm.glampresults = SearchService.getGData();
      vm.gsiteCoord = SearchService.createGCoord();
      vm.siteCoord = SearchService.createCoord();
      
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
