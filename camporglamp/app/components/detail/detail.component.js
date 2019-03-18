"use strict";
const detail = {
    templateUrl:`app/components/detail/detail.html`,
    controller: ["SearchService", function(SearchService) {
        const vm = this;
        vm.glampDetails = SearchService.glampDetails();
        // console.log(vm.detail);
        vm.glampSearch = function () {
            //our service get method
            SearchService.setGlamp();
        };
    }]
}

angular.module("App").component("detail", detail);
