"use strict";
const search = {
    templateUrl: `app/components/search/search.html`,
    controller: ['SearchService', '$location', function (SearchService, $location) {
        const vm = this;
        vm.showFooter = false;
        vm.footerBtn = false;
        vm.publicBtn = false
        // vm.
        //this method is a PROPERTY of our search controller. Onclick (in HTML) it calls the GET from our service.
        vm.campSearch = function (state) {
            //our service get method
            SearchService.get(state);
        };
        vm.glampSearch = function () {
            //our service get method
            SearchService.setGlamp();
        };
        vm.show = () => {
            vm.showFooter = !vm.showFooter;
            vm.footerBtn = !vm.footerBtn;
            vm.publicBtn = !vm.publicBtn;
            // console.log("click you")
          }

        vm.hide = () => {
            vm.publicBtn = !vm.publicBtn;
        }
    }]
};

angular.module("App").component("search", search);
