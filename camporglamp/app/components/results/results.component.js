"use strict";
const results = {
  templateUrl: `app/components/results/results.html`,
  controller: [
    "SearchService",
    function(SearchService) {
      const vm = this;
      vm.glampresults = SearchService.getGData(); 
      console.log(vm.glampresults)
      // vm.gsiteCoord = SearchService.createGCoord();

      const map = angular.element(document.querySelector("#map"));
      const results = angular.element(document.querySelector(".results"));
      const fixedRight = angular.element(document.querySelector(".fixedRight"));
      const fixedLeft = angular.element(document.querySelector(".fixedLeft"));
      vm.showMap = function() {
        map.css("display", "flex");
        fixedLeft.css("display", "flex");
        fixedRight.css("display", "none");
        results.css("display", "none");
      };
      vm.showResults = function() {
        map.css("display", "none");
        fixedLeft.css("display", "none");
        fixedRight.css("display", "flex");
        results.css("display", "flex");
      };

      // draws map for glampsites
      vm.initMap = function() {
        vm.map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: vm.glampresults[0].lat, lng: vm.glampresults[0].lng},
          zoom: 6
        });
        for (let i = 0; i < vm.glampresults.length; i++) {
            vm.marker = new google.maps.Marker({
              position: {lat: vm.glampresults[i].lat, lng: vm.glampresults[i].lng},
              map: vm.map,
              title: vm.glampresults[i].name
            });
        }
      };
      //get glampsites' details
      vm.getDetails = function(sites) {
        console.log(sites);
        SearchService.getGlamp(sites);
      };
      vm.filterResults = function() {
        vm.filterObj = {};
        const checked = document.querySelectorAll("input:checked");
        console.log(checked);
        for (let el of checked) {
        vm.filterObj[el.value] = true
        }
      }
      vm.initMap();
    }
  ]
};

angular.module("App").component("results", results);
