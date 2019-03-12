"use strict";
const details = {
    templateUrl:"app/components/details/details.html",
    controller: ["SearchService", function(SearchService) {
        const vm = self;
        vm.campSite = SearchService.getCamp();
        console.log(vm.campSite)
        // vm.alertGet = function(parkCode){
        //     SearchService.getAlerts(parkCode);
        // }
    }]
}



angular.module("App").component("details", details);