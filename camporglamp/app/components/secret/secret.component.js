"use strict";

const secret = {
    templateUrl:'app/components/secret/secret.html',
    controller: ["SearchService", "$location", function(SearchService, $location) {
        const vm = this;
        vm.showyoshi = false;
        vm.showforest = false;
        vm.showcastle = false;
    }]
}
angular.module("App").component("secret", secret);