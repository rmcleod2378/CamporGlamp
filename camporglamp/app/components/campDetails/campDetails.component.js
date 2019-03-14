"use strict";
const campDetails = {
    templateUrl:`app/components/campDetails/campDetails.html`,
    controller: ["SearchService", function(SearchService) {
        const vm = this;
        vm.campSite = SearchService.getCamp();
        console.log(vm.campSite)
        vm.alert = SearchService.getAlerts();
        console.log(vm.alert)
    }]
}

angular.module("App").component("campDetails", campDetails);