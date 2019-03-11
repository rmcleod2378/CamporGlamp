"use strict";
const search = {
  templateUrl: "app/components/search/search.html",
  controller: [
    "SearchService",
    "$location",
    function(SearchService, $location) {
      const vm = this;
      vm.campSearch = function() {
        SearchService.get()
      };
    }
  ]
};

angular.module("App").component("search", search);
