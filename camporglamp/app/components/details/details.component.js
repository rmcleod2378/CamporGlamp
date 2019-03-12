"use strict";
const details = {
    templateUrl:'app/components/details/details.html',
    controller: ["SearchService", function(SearchService) {
        const vm = self;

        vm.alertGet = function() {
            SearchService.getAlerts(parkcode);
        }
    }]
}



angular.module("App").component("details", details);