"use strict";
const glampDetails = {
    templateUrl:`app/components/glampDetails/glampDetails.html`,
    controller: ["SearchService", function(SearchService) {
        const vm = this;
        vm.glampDetails = SearchService.glampDetails();
        console.log(vm.glampDetails);
        vm.glampSearch = function () {
            //our service get method
            SearchService.setGlamp();
        };
    }]
}

angular.module("App").component("glampDetails", glampDetails);
