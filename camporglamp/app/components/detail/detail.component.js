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
         //takes the given property bookmarked, and utilizes it for a styling state when an item exists in our fave array
         vm.fave = (sites) => {
            // if  (!sites.bookmarked)  {
            //     sites.bookmarked = true;
                SearchService.addFave(sites);
            }
            // else    {
            //     sites.bookmarked = false;
            //     SearchService.deleteTempFav(sites);
            // }
        // }
    }]
}

angular.module("App").component("detail", detail);
