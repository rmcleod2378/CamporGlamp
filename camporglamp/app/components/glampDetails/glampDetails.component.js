"use strict";
const glampDetails = {
    templateUrl:`app/components/glampDetails/glampDetails.html`,
    controller: ["SearchService", function(SearchService) {
        const vm = this;
        vm.campSite = SearchService.getCamp();
        console.log(vm.campSite)
    }]
}

angular.module("App").component("glampDetails", glampDetails);
