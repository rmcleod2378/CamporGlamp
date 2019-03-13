"use strict";

angular.module("App").config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/", {
        template:'<search></search>',
    })
    .when("/search", {
        template:'<search></search>',
    })
    .when("/results", {
      template:'<results></results>',
    })
    .when("/camp-details", {
        template:'<camp-details></camp-details>'
    })
}]);