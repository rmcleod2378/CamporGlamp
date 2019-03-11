"use strict";
const search = {
    templateUrl:"app/components/search/search.html",
    controller: ['SearchService', '$location', function(SearchService, $location) {
        const vm = this;
        vm.campSearch = function() {
            SearchService.get().then(function(response) {
                vm.campresults = response.data.data;
                console.log(vm.campresults);
                $location.path("/results")
            });
        };
    }]
};


angular.module("App").component("search", search);