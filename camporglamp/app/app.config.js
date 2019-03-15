"use strict";

angular.module("App").config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/", {
        template:'<search></search>',
    })
    .when("/search", {
        template:'<search></search>',
    })
    .when("/camp-results", {
      template:'<camp-results></camp-results>',
    })
    .when("/camp-details", {
        template:'<camp-details></camp-details>'
    })
    .when("/glamp-results", {
      template:'<glamp-results></glamp-results>',
    })
    .when("/glamp-details", {
        template:'<glamp-details></glamp-details>'
    })
    .when("/secret", {
        template:'<secret></secret>'
    });
}]);