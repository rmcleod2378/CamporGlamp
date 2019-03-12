"use strict";
const search = {
    templateUrl: "app/components/search/search.html",
    controller: ['SearchService', '$location', function (SearchService, $location) {
        const vm = this;
        //this method is a PROPERTY of our search controller. Onclick (in HTML) it calls the GET from our service.
        vm.campSearch = function () {
            //our service get method
            SearchService.get();
        };
    }]
};

angular.module("App").component("search", search);
