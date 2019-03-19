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
          center: {lat: vm.glampresults[0].lat, lng: vm.glampresults[0].lng},
          zoom: 6
        });
        for (let i = 0; i < vm.glampresults.length; i++) {
          vm.marker = new google.maps.Marker({
            position: {lat: vm.glampresults[i].lat, lng: vm.glampresults[i].lng},
            map: vm.map,
            title: vm.glampresults[i].name
          });
          vm.markers.push(vm.marker)
        }
      }

        
        

      //get glampsites' details
      vm.getDetails = function(sites) {
        console.log(sites);
        SearchService.getGlamp(sites);
      };

      //filter results
      vm.filterResults = function() {
        vm.filterObj = {
          biking: undefined,
          fishing: undefined,
          hiking: undefined,
          watersports: undefined
        };

        const checked = document.querySelectorAll("input:checked");
        // console.log(checked);
        for (let el of checked) {
        vm.filterObj[el.value] = true
        }
        // Sets the map on all markers in the array.
        function setMapOnAll(map) {
          for (var i = 0; i < vm.markers.length; i++) {
            vm.markers[i].setMap(map);
          }
        }
        // Removes the markers from the map, but keeps them in the array.
        function clearMarkers() {
          setMapOnAll(null);
        }

        function makeNewMakers() {
          let newMarkers = [...vm.glampresults];


          if (vm.filterObj.camping == true) {
            for (let i = 0; i < newMarkers.length; i++){
              if (newMarkers[i].camping == "FALSE"){
                newMarkers.splice(i,1)
              }
            }
          } 
          if (vm.filterObj.glamping == true) {
            for (let i = 0; i < newMarkers.length; i++){
              if (newMarkers[i].glamping == "FALSE"){
                newMarkers.splice(i,1)
              }
            }
          } 
          if (vm.filterObj.biking == true) {
            for (let i = 0; i < newMarkers.length; i++){
              if (newMarkers[i].biking == "FALSE"){
                newMarkers.splice(i,1)
              }
            }
          } 
          if (vm.filterObj.hiking == true) {
            for (let i = 0; i < newMarkers.length; i++){
              if (newMarkers[i].hiking == "FALSE"){
                newMarkers.splice(i,1)
              }
            }
          } 
          if (vm.filterObj.fishing == true) {
            for (let i = 0; i < newMarkers.length; i++){
              if (newMarkers[i].fishing == "FALSE"){
                newMarkers.splice(i,1)
              }
            }
          } 
          if (vm.filterObj.watersports == true) {
            for (let i = 0; i < newMarkers.length; i++){
              if (newMarkers[i].watersports == "FALSE"){
                newMarkers.splice(i,1)
              }
            }
          } 
          console.log(newMarkers)
          vm.filteredMarkers = function(){
            for (let i = 0; i < newMarkers.length; i++) {
              vm.marker = new google.maps.Marker({
                position: {lat: newMarkers[i].lat, lng: newMarkers[i].lng},
                map: vm.map,
                title: newMarkers[i].name
              });
            }
          }
          vm.filteredMarkers();
        }

        
      clearMarkers();
      makeNewMakers();
      }
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
