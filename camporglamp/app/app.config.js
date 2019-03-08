"use strict";

angular.module("App").config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/search", {
        template:'<search></search>',
    }).
    otherwise("/search", {
        template:'<search></search>'
    });
}])