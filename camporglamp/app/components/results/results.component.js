"use strict";
const results = {
  templateUrl: `app/components/results/results.html`,
  controller: [
    "SearchService",
    function(SearchService) {
      const vm = this;
      vm.glampresults = SearchService.getGData();
      vm.gsiteCoord = SearchService.createGCoord();

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
          center: vm.gsiteCoord[0],
          zoom: 6
        });
        for (let i = 0; i < vm.gsiteCoord.length; i++) {
          if (vm.gsiteCoord[i].lat) {
            console.log("Good Coords");
            vm.marker = new google.maps.Marker({
              position: vm.gsiteCoord[i],
              map: vm.map,
              title: vm.glampresults[i].name
            });
          } else {
          }
        }
      };
      //get glampsites' details
      vm.getDetails = function(sites) {
        console.log(sites);
        SearchService.getGlamp(sites);
      };
      vm.initMap();

       //takes the given property bookmarked, and utilizes it for a styling state when an item exists in our fave array
      //  vm.fave = (item) => {
      //   if  (!item.bookmarked)  {
      //       item.bookmarked = true;
      //       SearchService.addFave(item);
      //   }
      //   else    {
      //       item.bookmarked = false;
      //       SearchService.deleteTempFav(item);
      //   }
      // }
    }
  ]
};

angular.module("App").component("results", results);
