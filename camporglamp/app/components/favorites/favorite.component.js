"use strict";

const favorite = {

  templateUrl: "app/components/favorites/favorite.html",
  controller: ["SearchService", function (SearchService) {
    const vm = this;
    vm.shown = false;
    vm.$onInit = () => {
      vm.faveArray = SearchService.getFave();
    }
    // delete from faveArray
    vm.delete = (idx) => {
      SearchService.deleteTempFav(idx);
      vm.faveArray = SearchService.getFave();
    }
    // behavior for faving from search-details template
    vm.setTempFave = (newArray) => {
      vm.faveArray = newArray;
    }
    vm.glampSearch = function () {
      //our service get method
      SearchService.setGlamp();
    };

    // vm.getFave = function(sites) {
    //   console.log(sites);
    //   SearchService.getFave(sites);
    // };
  }]
};


angular.module("App").component("favorite", favorite);