"use strict";
const results = {
  templateUrl: `app/components/results/results.html`,
  controller: [
    "SearchService",
    function(SearchService) {
      const vm = this;

      vm.glampresults = SearchService.getGData();
      vm.markers = [];

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

          center: { lat: 44.214265, lng: -86.010788},
          zoom: 6.75
        });
        for (let i = 0; i < vm.glampresults.length; i++) {
          vm.marker = new google.maps.Marker({
            position: {
              lat: vm.glampresults[i].lat,
              lng: vm.glampresults[i].lng
            },
            map: vm.map,
            title: vm.glampresults[i].name
          });
          vm.markers.push(vm.marker);
        }
      };
      //get site details
      vm.getDetails = function(sites) {
        SearchService.getGlamp(sites);
      };

      //filter results & filter map markers
      vm.filterResults = function() {
        deleteMarkers();
        function setMapOnAll(map) {
          for (var i = 0; i < vm.markers.length; i++) {
            vm.markers[i].setMap(map);
          }
        }
        function clearMarkers() {
          setMapOnAll(null);
        }
        function deleteMarkers() {
          clearMarkers();
          vm.markers = [];
        }

        vm.filterObj = {
          glamp: undefined,
          camp: undefined,
          biking: undefined,
          fishing: undefined,
          hiking: undefined,
          watersports: undefined
        };

        const checked = document.querySelectorAll("input:checked");
        for (let el of checked) {
          vm.filterObj[el.value] = true;
        }

        let newMarkers = [...vm.glampresults];

        if (vm.filterObj.glamp == true) {
          for (let i = newMarkers.length - 1; i >= 0; i--) {
            if (newMarkers[i].glamp == "FALSE") {
              newMarkers = [
                ...newMarkers.slice(0, i),
                ...newMarkers.slice(i + 1)
              ];
            }
          }
        }
        if (vm.filterObj.camp == true) {
          for (let i = newMarkers.length - 1; i >= 0; i--) {
            if (newMarkers[i].camp == "FALSE") {
              newMarkers = [
                ...newMarkers.slice(0, i),
                ...newMarkers.slice(i + 1)
              ];
            }
          }
        }
        if (vm.filterObj.biking == true) {
          for (let i = newMarkers.length - 1; i >= 0; i--) {
            if (newMarkers[i].biking == "FALSE") {
              newMarkers = [
                ...newMarkers.slice(0, i),
                ...newMarkers.slice(i + 1)
              ];
            }
          }
        }
        if (vm.filterObj.hiking == true) {
          for (let i = newMarkers.length - 1; i >= 0; i--) {
            if (newMarkers[i].hiking == "FALSE") {
              newMarkers = [
                ...newMarkers.slice(0, i),
                ...newMarkers.slice(i + 1)
              ];
            }
          }
        }
        if (vm.filterObj.fishing == true) {
          for (let i = newMarkers.length - 1; i >= 0; i--) {
            if (newMarkers[i].fishing == "FALSE") {
              newMarkers = [
                ...newMarkers.slice(0, i),
                ...newMarkers.slice(i + 1)
              ];
            }
          }
        }
        if (vm.filterObj.watersports == true) {
          for (let i = newMarkers.length - 1; i >= 0; i--) {
            if (newMarkers[i].watersports == "FALSE") {
              newMarkers = [
                ...newMarkers.slice(0, i),
                ...newMarkers.slice(i + 1)
              ];
            }
          }
        }
        for (let i = 0; i < newMarkers.length; i++) {
          vm.marker = new google.maps.Marker({
            position: { lat: newMarkers[i].lat, lng: newMarkers[i].lng },
            map: vm.map,
            title: newMarkers[i].name
          });
          vm.markers.push(vm.marker);
        }
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
