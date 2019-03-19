"use strict";

const favorite = {
    
  templateUrl:"app/components/favorites/favorite.html",
  controller: ["SearchService", function(SearchService) {
      const vm = this;
      vm.shown = false;
      vm.$onInit = () => {
          vm.faveArray = SearchService.getFave();
      }
      // delete from faveArray
      vm.delete = (idx) => {
          AppService.deleteTempFav(idx);
          vm.faveArray = SearchService.getFave();
      }
      // // pop up behavior within faveArray
      // vm.show = (item) => {
      //     vm.focused = item;
      //     vm.shown = true;
    // }
      // behavior for faving from search-details template
      vm.setTempFave = (newArray) => {
          vm.faveArray = newArray;
      }

      vm.getFave = function(sites) {
        console.log(sites);
        SearchService.getFave(sites);
      };
         

  }]
};


angular.module("App").component("favorite", favorite);