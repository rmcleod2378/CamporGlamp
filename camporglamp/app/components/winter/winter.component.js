"use strict";

const winter = {
    templateUrl:'app/components/winter/winter.html',
    controller: ["SearchService", "$location", function(SearchService, $location) {
        const vm = this;
        vm.winterCampSearch = function() {
          SearchService.setWinterCamp();
        };
        vm.winterGlampSearch = function() {
          SearchService.setWinterGlamp();
        };
    }]
};

angular.module("App").component("winter", winter);