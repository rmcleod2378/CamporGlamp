"use strict";
const search = {
    templateUrl: "app/components/search/search.html",
    controller: ['SearchService', '$location', function (SearchService, $location) {
        const vm = this;
        vm.showFooter = false;
        //this method is a PROPERTY of our search controller. Onclick (in HTML) it calls the GET from our service.
        vm.campSearch = function () {
            //our service get method
            SearchService.get();
        };
        vm.show = () => {
            vm.showFooter = !vm.showFooter;
            console.log("click you")
          }
    }]
};

angular.module("App").component("search", search);
