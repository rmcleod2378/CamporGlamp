const secret = {
    templateUrl:'app/components/secret/secret.html',
    controller: ["SearchService", "$location", function(SearchService, $location) {
        const vm = this;
    }]
};




angular.module("App").component("secret", secret);