"use strict";
const campDetails = {
    templateUrl:`app/components/campDetails/campDetails.html`,
    controller: ["SearchService", function(SearchService) {
        const vm = this;
        vm.campSite = SearchService.getCamp();
        console.log(vm.campSite)
        // vm.alertGet = function(parkCode){
        //     SearchService.getAlerts(parkCode);
        // }
    }]
}



angular.module("App").component("campDetails", campDetails);