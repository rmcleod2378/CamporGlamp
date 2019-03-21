"use strict";

const winterdetails = {
    templateUrl:'app/components/winter/winterdetails.html',
    controller: ["SearchService", "$location", function(SearchService, $location) {
        const vm = this;
        vm.wintercampresults = SearchService.getWinterCamp();   
        vm.winterglampresults = SearchService.getWinterGlamp();              
    }]
};

angular.module("App").component("winterdetails", winterdetails);